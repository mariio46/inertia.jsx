<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Figtree -->
    <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">

    <!-- Fira Code -->
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/pages/{$page['component']}.jsx"])
    @inertiaHead
    <script>
        let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        updateMode()
        darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
        window.addEventListener('storage', updateModeWithoutTransitions)

        function updateMode() {
            let isSystemDarkMode = darkModeMediaQuery.matches
            let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) &&
                isSystemDarkMode)

            if (isDarkMode) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }

            if (isDarkMode === isSystemDarkMode) {
                delete window.localStorage.isDarkMode
            }
        }

        function disableTransitionsTemporarily() {
            document.documentElement.classList.add('[&_*]:!transition-none')
            window.setTimeout(() => {
                document.documentElement.classList.remove('[&_*]:!transition-none')
            }, 0)
        }

        function updateModeWithoutTransitions() {
            disableTransitionsTemporarily()
            updateMode()
        }
    </script>
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
