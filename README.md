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
# {
#   "plugin": ["opencode-clipboard-image-paste-wayland"]
# }

# 4. Configure tui.json
# Create ~/.config/opencode/tui.json:
# {
#   "$schema": "https://opencode.ai/tui.json",
#   "keybinds": {
#     "input_paste_image": "ctrl+shift+v"
#   }
# }

# 5. Restart OpenCode
```

## Usage

1. Copy image to clipboard
2. Press `ctrl+shift+v` in OpenCode
3. Image pastes automatically

## Requirements

- Wayland
- wl-clipboard
- OpenCode

## License

MIT
