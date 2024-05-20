let deferredPromt;

if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function() {
    console.log("Service worker зареєстровано!");
    });
    }

    window.addEventListener("beforeinstallpromt", function(event)
    {
        console.log("beforeinstallpromt скасовано");
        event.preventDefault();
        deferredPromt = event;
        return false;
    });