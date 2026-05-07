# OpenCode Clipboard Image Paste (Wayland)

OpenCode plugin to paste images from clipboard on Wayland with automatic keybinding configuration.

## Requirements

- **Wayland** display server
- **wl-clipboard** package (provides `wl-paste` command)
- OpenCode with plugin support

## Installation

### 1. Install wl-clipboard

On Arch/CachyOS:
```bash
sudo pacman -S wl-clipboard
```

On Debian/Ubuntu:
```bash
sudo apt install wl-clipboard
```

On Fedora:
```bash
sudo dnf install wl-clipboard
```

### 2. Install the Plugin

Install from npm:

```bash
npm install opencode-clipboard-image-paste-wayland
```

Add to your `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["opencode-clipboard-image-paste-wayland"]
}
```

### 3. Configure the Keybinding

Create or update `~/.config/opencode/tui.json`:

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "keybinds": {
    "input_paste_image": "ctrl+shift+v"
  }
}
```

If `tui.json` already exists, add the `keybinds` section:

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "keybinds": {
    "input_paste_image": "ctrl+shift+v"
  }
}
```

### 4. Restart OpenCode

The plugin is now ready to use.

## Usage

1. Take a screenshot or copy an image to your clipboard
2. Press `ctrl+shift+v` in OpenCode
3. The image will be automatically pasted and available for the AI to analyze

## How It Works

The plugin provides:

1. **Custom Tool**: `pasteImageFromClipboard` that:
   - Checks if the clipboard contains an image via `wl-paste --type image/png`
   - Saves the image to `.opencode/tmp/clipboard-image-{timestamp}.png`
   - Validates the image size
   - Returns a markdown reference for the AI to read
   - Logs the operation for debugging

## Features

- **Automatic Detection**: Checks if the clipboard contains an image
- **Instant Paste**: Press the shortcut and the image is pasted automatically
- **Timestamped Files**: Prevents overwriting previous images
- **Size Validation**: Ensures actual image content (> 100 bytes)
- **Structured Logging**: Easy debugging via OpenCode logs
- **Non-Destructive**: Preserves existing keybindings in `tui.json`

## Troubleshooting

### "wl-paste failed - no image in clipboard or Wayland not available"
- Ensure you're running on Wayland (not X11)
- Install wl-clipboard: `sudo pacman -S wl-clipboard`
- Make sure you have an image in your clipboard

### "Clipboard does not contain a valid image"
- Make sure you've copied an image (not text) to your clipboard
- Try taking a fresh screenshot
- Test with: `wl-paste --list-types` (should show image/*)

### Keybinding not working
- Verify that `~/.config/opencode/tui.json` exists
- Check that `input_paste_image` is set to `ctrl+shift+v`
- Verify that the plugin loaded successfully
- Restart OpenCode after changing the configuration

### Images not visible to AI
- Check that `.opencode/tmp/` exists and contains the image
- The image path is relative to your project directory
- View OpenCode logs for debugging information

## License

MIT
