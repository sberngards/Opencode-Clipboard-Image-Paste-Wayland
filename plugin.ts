import { type Plugin, tool } from "@opencode-ai/plugin"

export const ClipboardImagePastePlugin: Plugin = async ({ client, $ }) => {
  return {
    tool: {
      pasteImageFromClipboard: tool({
        description: "Paste an image from the system clipboard (Wayland). Saves the image and returns the markdown image reference for the AI to read.",
        args: {},
        async execute(args, context) {
          const { directory, $ } = context
          const tempDir = `${directory}/.opencode/tmp`
          
          
          const mkdirResult = await $`mkdir -p ${tempDir}`
          
          const timestamp = Date.now()
          const imagePath = `${tempDir}/clipboard-image-${timestamp}.png`

          const pasteResult = await $`wl-paste --type image/png > ${imagePath}`
          
          if (pasteResult.exitCode !== 0) {
            return {
              success: false,
              error: "No image in clipboard or Wayland not available. Make sure you have copied an image to your clipboard.",
            }
          }

          const statsResult = await $`wc -c < ${imagePath}`
          const fileSize = parseInt(statsResult.stdout.trim())

          if (fileSize < 100) {
            await $`rm ${imagePath}`
            return {
              success: false,
              error: "Clipboard does not contain a valid image",
            }
          }

          await client.app.log({
            body: {
              service: "clipboard-image-paste",
              level: "info",
              message: "Image pasted from clipboard",
              imagePath,
              fileSize,
            },
          })

          const markdown = `![Screenshot](${imagePath})`
          
          return {
            success: true,
            imagePath,
            markdown,
            sizeKB: (fileSize / 1024).toFixed(1),
            message: `Image saved to ${imagePath} (${(fileSize / 1024).toFixed(1)} KB). The image is now available for me to analyze.`,
          }
        },
      }),
    },
  }
}