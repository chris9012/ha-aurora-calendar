# Aurora Calendar — Personal Fork

![Aurora Calendar](https://raw.githubusercontent.com/davidlop28/ha-aurora-calendar/main/assets/banner.png)

> **This is a personal fork of [davidlop28/ha-aurora-calendar](https://github.com/davidlop28/ha-aurora-calendar)**
> with custom features added for family calendar management.
> The upstream project is actively maintained — this fork tracks it via `git rebase`.

---

## Custom Features (this fork)

### Shared Event Deduplication
When the same event appears on multiple family calendars (e.g. a child's event that parents are invited to), the card automatically deduplicates it into a single chip. The originating calendar's color is preserved, and all attendees' avatars are shown stacked on the chip.

Uses the Google Calendar `is_self` attendee flag to identify the home calendar — the copy where no attendee has `is_self=true` is the originator.

### Stacked Attendee Avatars
Events shared across multiple calendars show overlapping circular avatars for each person involved, instead of a single avatar.

### Occasions Calendar with Animated Icons
Designate a specific calendar as your "occasions" calendar during integration setup. Events on that calendar get animated Google Noto emoji icons:
- Events containing **"birthday"** → animated 🎂 birthday cake
- Events containing **"anniversary"** → animated 🥂 clinking glasses

Animated icons are powered by bundled Lottie animations from [Google Noto Emoji Animations](https://googlefonts.github.io/noto-emoji-animation/), served locally — no external dependencies.

### Weather Enhancements
- Precipitation probability shown as 💧 % on weather pills
- Temperature display reformatted to `high / low` inline

### Rolling 2 Weeks View
Additional view mode showing a rolling two-week window starting from today.

---

## Installation via HACS

1. In HA go to **HACS → Integrations** → three dots (top right) → **Custom repositories**
2. Add `https://github.com/chris9012/ha-aurora-calendar` as type **Integration**
3. Find **Aurora Calendar** in HACS and install it
4. Restart Home Assistant
5. Go to **Settings → Devices & Services → Add Integration**, search **Aurora Calendar**

---

## Integration Setup

During setup you will configure:

| Field | Description |
|---|---|
| **Calendar entities** | The HA calendar entities to display |
| **Weather entity** | Optional — for the forecast overlay |
| **Occasions calendar** | Optional — events here get special animated icons |

Then for each calendar you can set a display name, color, and linked HA person entity for avatar photos.

---

## Card Configuration

Add the card to any dashboard and use the visual editor, or use YAML:

```yaml
type: custom:aurora-calendar-card
integration: aurora_calendar
```

### Full YAML reference

```yaml
type: custom:aurora-calendar-card
integration: aurora_calendar

# General
week_start: sunday                  # sunday | monday

# Layout
height_mode: auto                   # auto | ha | fixed | natural
fixed_height: "640px"

# Event display
dim_past_events: true
show_event_time: true
time_format: 12h                    # 12h | 24h
keep_all_day_events_visible: false
show_calendar_grid_lines: true
event_font_size: 14
event_font_family: inherit

# Time grid (week/biweek/today views)
visible_start_hour: 6
visible_end_hour: 22

# Background
glass_background: false
card_opacity: 100
background_image: ""
background_image_opacity: 35
background_blur: 0
background_media:
  media_content_id: media-source://media_source/local/photo.jpg
  media_content_type: image/jpeg

# Weather
show_weather: true
weather_icon_style: static          # static | animated
```

---

## Development Workflow

### Prerequisites

- Node.js + npm
- Git
- Access to the HA instance via `\\homeassistant\config` (Samba)

### Setup

```bash
git clone https://github.com/chris9012/ha-aurora-calendar
cd ha-aurora-calendar
npm install
```

### Available commands

| Command | What it does |
|---|---|
| `npm run build` | Compile TypeScript → `aurora-calendar-card.js` and auto-deploy JS to HA |
| `npm run dev` | Watch mode — rebuilds on every file change |
| `npm run sync` | Fetch upstream changes, rebase, rebuild JS |
| `npm run push` | Push current branch to this fork |
| `npm run update` | `sync` + `push` in one step |
| `npm run deploy` | Copy Python files and event-icons to HA via Samba |
| `npm test` | Run frontend tests |

### When upstream releases an update

```bash
npm run update
```

Then open HACS → Aurora Calendar → Update.

### When you change TypeScript/frontend files

```bash
npm run build   # JS is auto-deployed to HA via Samba
# Hard-refresh browser (Ctrl+Shift+R)
```

### When you change Python files

```bash
npm run deploy  # Copies *.py to HA via Samba
# Reload the integration: Settings → Devices & Services → Aurora Calendar → Reload
```

### When you change both

```bash
npm run build && npm run deploy
# Reload integration + hard-refresh browser
```

### Keeping the fork in sync (git remotes)

```
origin   → https://github.com/chris9012/ha-aurora-calendar  (your fork)
upstream → https://github.com/davidlop28/ha-aurora-calendar (original)
```

`npm run sync` runs `git fetch upstream && git rebase upstream/main && npm run build` automatically.

---

## Project Structure

```
custom_components/aurora_calendar/
├── __init__.py          # Integration setup, Lovelace resource registration
├── calendar_api.py      # Custom WebSocket command for enriched event fetching
├── config_flow.py       # Setup/reconfigure UI
├── coordinator.py       # Shared state (calendars, colors, filters)
├── sensor.py            # Exposes config to the card via entity attributes
├── event-icons/         # Bundled Lottie animation files
│   ├── birthday-cake.json
│   └── clinking-glasses.json
└── aurora-calendar-card.js  # Compiled card (built by rollup)

src/                     # TypeScript source
├── aurora-calendar-card.ts  # Main card component
├── aurora-lottie.ts         # Lottie player custom element
├── calendar-month.ts        # Month/biweek/rolling view
├── calendar-week-box.ts     # Week/next-7 view
├── event-utils.ts           # Event fetching, deduplication
└── types.ts                 # Shared TypeScript types
```

---

## Original Project

All credit for the base Aurora Calendar goes to [@davidlop28](https://github.com/davidlop28/ha-aurora-calendar).
If you find Aurora Calendar useful, consider supporting the original author:

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-davidlop28-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/davidlop28)

---

## License

[MIT](LICENSE)
