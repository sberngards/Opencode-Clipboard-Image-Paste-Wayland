# OpenCode Clipboard Image Paste (Wayland)

Plugin to paste images from clipboard on Wayland.

## Installation

```bash
# 1. Install wl-clipboard
sudo pacman -S wl-clipboard  # Arch/CachyOS

# 2. Install plugin
npm install opencode-clipboard-image-paste-wayland

# 3. Add to opencode.json
# Add to your opencode.json:
{
  "plugin": ["opencode-clipboard-image-paste-wayland"]
}

# 4. Restart OpenCode
```

## Usage

1. Copy image to clipboard
2. Run keybind CTRL-SHIFT-V
3. Image is pasted and saved, then you can analyze it

## Requirements

- Wayland
- wl-clipboard
- OpenCode
- A model that supports vision/image input

Examples of models that support vision:
- Claude Sonnet 4.6 / Haiku 4.5
- GPT-5.1 / GPT-5.2
- Gemini 2.5 Pro / Flash
- Llama 3.2 Vision
- Qwen3-VL

## License

MIT
