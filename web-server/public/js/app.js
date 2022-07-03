window.onload = () => {
    const searchbox = document.getElementById('searchbox');
    const container = document.getElementById('container');
    const icon = document.getElementById('forcast-icon');
    const timezone = document.getElementById('timezone');
    const box = document.getElementById('forcast-detail');

    const weather = {
        'partly-cloudy-night': '#505a75',
        'clear-day': '#e6a50e',
    };

    searchbox.addEventListener('keyup', async (e) => {
        if (e.keyCode !== 13) return;
        const value = e.target.value;
        const res = await axios.get(`/forcast/${value}`);
        const forcast = res.data;
        const currently = forcast.currently;
        const time = new Date(currently.time * 1000);
        const hrs = time.getHours();
        timezone.innerHTML = forcast.timezone + ' ' + hrs;
        let tzColor = { bg: null, color: null };
        if (hrs <= 6) {
            tzColor = { bg: '#f5edba', color: 'black' };
        } else if (hrs > 6 && hrs <= 12) {
            tzColor = { bg: '#f5c86e', color: 'black' };
        } else if (hrs > 12 && hrs <= 18) {
            tzColor = { bg: '#516c85', color: 'black' };
        } else {
            tzColor = { bg: '#1a2126', color: 'white' };
        }
        timezone.style.backgroundColor = tzColor.bg;
        timezone.style.color = tzColor.color;
        // we can use hrs to darken or lighten something according to timezone
        icon.style.backgroundImage = `url('img/weather/${currently.icon}.svg')`;
        icon.style.backgroundColor = weather[currently.icon] || 'white';
        container.style.opacity = '1';
        box.innerHTML = JSON.stringify(forcast);
    });
};
