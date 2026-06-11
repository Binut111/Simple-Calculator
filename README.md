# Simple Calculator & Digital Clock Projects

A collection of two interactive web applications built with HTML, CSS, and JavaScript - a fully functional calculator and a multi-timezone digital clock.

---

## 📋 Table of Contents

- [Projects Overview](#projects-overview)
- [Calculator](#calculator)
- [Digital Clock](#digital-clock)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Projects Overview

This repository contains two standalone web applications, each in its own directory:

1. **Calculator** - A simple, intuitive calculator for basic arithmetic operations
2. **Digital Clock** - A multi-timezone digital clock displaying time across 8 different locations

Both projects are built with vanilla HTML, CSS, and JavaScript - no dependencies required!

---

## 🧮 Calculator

A sleek, modern calculator application that performs basic arithmetic operations with a user-friendly interface.

### Features

✨ **Basic Operations**
- Addition, subtraction, multiplication, and division
- Decimal number support
- Real-time display updates

🎛️ **User Controls**
- Clear (C) - Reset the calculator
- Delete (DEL) - Remove the last digit
- Chain calculations - Perform multiple operations sequentially

🎨 **User Interface**
- Responsive design for all screen sizes
- Color-coded buttons (operators in blue, clear in red, equals in green)
- Smooth hover and click animations
- Large, easy-to-read display

### How to Use

1. Open `calculator/index.html` in your web browser
2. Click on number buttons to input values
3. Select an operator (+, -, *, /)
4. Click the equals button (=) to see the result
5. Use the Clear button to reset or Delete to remove the last digit

### Files

```
calculator/
├── index.html    # HTML structure
├── style.css     # Styling and layout
└── script.js     # Calculator logic and interactivity
```

---

## 🕐 Digital Clock

A beautiful multi-timezone digital clock that displays the current time across 8 major cities worldwide.

### Features

🌍 **Multiple Time Zones**
- Local Time (Your timezone)
- UTC / GMT (Universal Time)
- New York (EST/EDT)
- London (GMT/BST)
- Tokyo (JST)
- Sydney (AEDT/AEST)
- Dubai (GST)
- Los Angeles (PST/PDT)

⏰ **Display Options**
- Toggle between 24-hour and 12-hour (AM/PM) formats
- Show/hide seconds display
- Formatted date display for each timezone
- Real-time updates every second

🎨 **Design**
- Responsive grid layout
- Smooth animations and transitions
- Hover effects on clock cards
- Beautiful gradient background
- Mobile-friendly design

### How to Use

1. Open `clock/index.html` in your web browser
2. View the current time in all 8 time zones simultaneously
3. Click "Switch to 12-hour Format" to toggle between 24-hour and 12-hour time display
4. Click "Hide Seconds" to toggle the seconds display
5. Observe the real-time updates as seconds tick by

### Files

```
clock/
├── index.html    # HTML structure with clock cards
├── style.css     # Responsive design and animations
└── script.js     # Time calculation and timezone logic
```

---

## 📦 Installation

No installation required! These are pure HTML/CSS/JavaScript applications.

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/Binut111/Simple-Calculator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Simple-Calculator
   ```

3. Open either application:
   - **Calculator**: Double-click `calculator/index.html` or open it in your browser
   - **Clock**: Double-click `clock/index.html` or open it in your browser

---

## 🚀 Usage

### Calculator

```
Example: 15 + 8 * 2 = ?
1. Click "1" then "5"
2. Click "+" 
3. Click "8"
4. Click "*"
5. Click "2"
6. Click "="
Result: 31 (performs operations in sequence)
```

### Digital Clock

```
The clock automatically updates every second and displays:
- Current time in 8 different time zones
- Formatted date for each location
- Toggle between 24-hour and 12-hour formats
- Option to hide/show seconds
```

---

## ✨ Features Summary

### Calculator Features
- ✅ Addition, subtraction, multiplication, division
- ✅ Decimal point support
- ✅ Clear button to reset
- ✅ Delete button to remove last digit
- ✅ Chain calculations
- ✅ Division by zero protection
- ✅ Responsive design
- ✅ Smooth animations

### Clock Features
- ✅ Real-time updates every second
- ✅ 8 international time zones
- ✅ 24-hour and 12-hour format toggle
- ✅ Show/hide seconds option
- ✅ Formatted date display
- ✅ Responsive grid layout
- ✅ Hover animations
- ✅ Mobile-friendly design

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling, flexbox, grid, gradients, animations
- **JavaScript (Vanilla)** - No frameworks or libraries
  - DOM manipulation
  - Event listeners
  - Intl API for timezone handling
  - Date/Time calculations

---

## 📁 File Structure

```
Simple-Calculator/
├── README.md                 # This file
├── calculator/              # Calculator project
│   ├── index.html          # Calculator interface
│   ├── style.css           # Calculator styles
│   └── script.js           # Calculator logic
└── clock/                  # Digital clock project
    ├── index.html          # Clock interface
    ├── style.css           # Clock styles
    └── script.js           # Clock logic
```

---

## 📱 Browser Compatibility

Both applications work on:
- ✅ Chrome/Chromium (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎨 Design Highlights

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Accent Colors**: Blue (operators), Red (clear), Green (equals), Orange (delete)
- **Background**: White cards on gradient background

### Responsive Design
- Desktop (1200px+): Full layout with multiple columns
- Tablet (768px - 1199px): Adjusted grid and font sizes
- Mobile (< 768px): Single column layout, optimized touch targets

---

## 🔧 Customization

### Calculator
- Modify colors in `calculator/style.css`
- Add more operations in `calculator/script.js`
- Change button layout in `calculator/index.html`

### Clock
- Add more time zones in `clock/script.js` (timezones object)
- Customize colors in `clock/style.css`
- Modify date format in `clock/script.js`

---

## 📝 Notes

- **Calculator**: Performs calculations in sequence (left to right)
- **Clock**: Uses JavaScript's Intl API for accurate timezone handling
- **No External Dependencies**: Both projects use vanilla JavaScript
- **Fully Responsive**: Both applications adapt to any screen size

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Bernard Juk (Binut111)**

---

## 📞 Support

If you have any questions or issues:
1. Check the file structure and ensure all files are in the correct directories
2. Verify that you're opening the correct HTML file
3. Check browser console for any errors
4. Ensure JavaScript is enabled in your browser

---

## 🚀 Future Enhancements

### Calculator
- [ ] Add advanced operations (square root, power, percentage)
- [ ] Add calculation history
- [ ] Keyboard support
- [ ] Theme switcher (dark/light mode)

### Clock
- [ ] Add more time zones
- [ ] User-customizable timezone selection
- [ ] Alarm functionality
- [ ] Stopwatch/Timer mode
- [ ] Dark theme option

---

**Happy calculating and time-keeping! ⏰🧮**
