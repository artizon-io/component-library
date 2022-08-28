export const setColors = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.style.setProperty('--bg-100', '#000000');
    document.documentElement.style.setProperty('--bg-80', '#0e0f0f');
    document.documentElement.style.setProperty('--bg-60', '#1a1a1b');
    document.documentElement.style.setProperty('--bg-40', '#212223');
    document.documentElement.style.setProperty('--bg-20', '#313335');

    document.documentElement.style.setProperty('--main-100', '#CFDCFD');
    document.documentElement.style.setProperty('--main-80', '#86A9F9');
    document.documentElement.style.setProperty('--main-60', '#24639e');
    document.documentElement.style.setProperty('--main-40', '#215381');
    document.documentElement.style.setProperty('--main-20', '#1f4569');

    document.documentElement.style.setProperty('--second-100', '#df558a');
    document.documentElement.style.setProperty('--second-80', '#cc5381');
    document.documentElement.style.setProperty('--second-60', '#b34b73');
    document.documentElement.style.setProperty('--second-40', '#9a3e61');
    document.documentElement.style.setProperty('--second-20', '#7a2b49');

    document.documentElement.style.setProperty('--fg-100', '#f4f4f4');
    document.documentElement.style.setProperty('--fg-80', '#dce0e2');
    document.documentElement.style.setProperty('--fg-60', '#c3c8cb');
    document.documentElement.style.setProperty('--fg-40', '#abb0b4');
    document.documentElement.style.setProperty('--fg-20', '#82878b');

  } else {
    document.documentElement.style.setProperty('--bg-100', '#f4f4f4');
    document.documentElement.style.setProperty('--bg-80', '#dce0e2');
    document.documentElement.style.setProperty('--bg-60', '#c3c8cb');
    document.documentElement.style.setProperty('--bg-40', '#abb0b4');
    document.documentElement.style.setProperty('--bg-20', '#82878b');
    
    document.documentElement.style.setProperty('--main-100', '#1f4569');
    document.documentElement.style.setProperty('--main-80', '#215381');
    document.documentElement.style.setProperty('--main-60', '#24639e');
    document.documentElement.style.setProperty('--main-40', '#277bc9');
    document.documentElement.style.setProperty('--main-20', '#1f93fe');

    document.documentElement.style.setProperty('--second-100', '#7a2b49');
    document.documentElement.style.setProperty('--second-80', '#9a3e61');
    document.documentElement.style.setProperty('--second-60', '#b34b73');
    document.documentElement.style.setProperty('--second-40', '#cc5381');
    document.documentElement.style.setProperty('--second-20', '#df558a');

    document.documentElement.style.setProperty('--fg-100', '#000000');
    document.documentElement.style.setProperty('--fg-80', '#0e0f0f');
    document.documentElement.style.setProperty('--fg-60', '#1a1a1b');
    document.documentElement.style.setProperty('--fg-40', '#212223');
    document.documentElement.style.setProperty('--fg-20', '#313335');
  }
}