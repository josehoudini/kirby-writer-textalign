# Kirby Writer TextAlign Plugin

Adds text alignment buttons (left, center, right) to the Kirby Writer field.

## Installation

### Download

1. Download the .zip
2. Copy the folder into `/site/plugins/kirby-writer-textalign`

## Usage
1. The plugin automatically adds alignment buttons to all Writer fields:

```yaml
fields:
  text:
    type: writer
```

2. Define your css classes:
```css
.align-left { text-align: left; }
.align-center { text-align: center; }
.align-right { text-align: right; }
```