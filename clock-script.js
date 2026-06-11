// Time zone configurations
const timezones = {
    'local': { label: 'Local', offset: null, id: 'local-clock' },
    'utc': { label: 'UTC', offset: 0, id: 'utc-clock' },
    'ny': { label: 'New York', timeZone: 'America/New_York', id: 'ny-clock' },
    'london': { label: 'London', timeZone: 'Europe/London', id: 'london-clock' },
    'tokyo': { label: 'Tokyo', timeZone: 'Asia/Tokyo', id: 'tokyo-clock' },
    'sydney': { label: 'Sydney', timeZone: 'Australia/Sydney', id: 'sydney-clock' },
    'dubai': { label: 'Dubai', timeZone: 'Asia/Dubai', id: 'dubai-clock' },
    'la': { label: 'Los Angeles', timeZone: 'America/Los_Angeles', id: 'la-clock' }
};

let is24Hour = true;
let showSeconds = true;

// Format time with leading zeros
function padZero(num) {
    return String(num).padStart(2, '0');
}

// Convert 24-hour format to 12-hour format
function convertTo12Hour(hours, minutes) {
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return { displayHours: padZero(displayHours), period };
}

// Get time for a specific timezone
function getTimeInTimezone(timeZone) {
    try {
        const options = {
            timeZone: timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const parts = formatter.formatToParts(new Date());
        
        const time = {};
        parts.forEach(part => {
            time[part.type] = part.value;
        });
        
        return {
            hours: parseInt(time.hour),
            minutes: parseInt(time.minute),
            seconds: parseInt(time.second)
        };
    } catch (error) {
        console.error('Error getting time for timezone:', timeZone, error);
        return { hours: 0, minutes: 0, seconds: 0 };
    }
}

// Format the display time
function formatTime(hours, minutes, seconds) {
    let timeString = '';
    
    if (is24Hour) {
        timeString = `${padZero(hours)}:${padZero(minutes)}`;
    } else {
        const { displayHours, period } = convertTo12Hour(hours, minutes);
        timeString = `${displayHours}:${padZero(minutes)} ${period}`;
    }
    
    if (showSeconds) {
        timeString += `:${padZero(seconds)}`;
    }
    
    return timeString;
}

// Get formatted date
function getFormattedDate(timeZone) {
    try {
        const options = {
            timeZone: timeZone,
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        return new Intl.DateTimeFormat('en-US', options).format(new Date());
    } catch (error) {
        return new Date().toLocaleDateString();
    }
}

// Update all clocks
function updateClocks() {
    for (const key in timezones) {
        const tz = timezones[key];
        let time;
        let date;
        
        if (key === 'local') {
            const now = new Date();
            time = {
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds()
            };
            date = now.toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } else if (key === 'utc') {
            const now = new Date();
            time = {
                hours: now.getUTCHours(),
                minutes: now.getUTCMinutes(),
                seconds: now.getUTCSeconds()
            };
            date = getFormattedDate('UTC');
        } else {
            time = getTimeInTimezone(tz.timeZone);
            date = getFormattedDate(tz.timeZone);
        }
        
        // Update clock display
        const clockElement = document.getElementById(tz.id);
        if (clockElement) {
            clockElement.textContent = formatTime(time.hours, time.minutes, time.seconds);
        }
        
        // Update date display
        const dateElement = document.getElementById(tz.id.replace('clock', 'date'));
        if (dateElement) {
            dateElement.textContent = date;
        }
    }
}

// Toggle 24-hour format
function toggle24Hour() {
    is24Hour = !is24Hour;
    const button = document.getElementById('toggle-24h');
    button.textContent = is24Hour ? 'Switch to 12-hour Format' : 'Switch to 24-hour Format';
    updateClocks();
}

// Toggle seconds display
function toggleSeconds() {
    showSeconds = !showSeconds;
    const button = document.getElementById('toggle-seconds');
    button.textContent = showSeconds ? 'Hide Seconds' : 'Show Seconds';
    updateClocks();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set up event listeners
    document.getElementById('toggle-24h').addEventListener('click', toggle24Hour);
    document.getElementById('toggle-seconds').addEventListener('click', toggleSeconds);
    
    // Update clocks immediately and then every second
    updateClocks();
    setInterval(updateClocks, 1000);
});
