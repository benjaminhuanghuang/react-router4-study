## https://www.sitepoint.com/react-router-v4-complete-guide/

    history is a JavaScript library that lets you easily manage session history anywhere JavaScript runs. history provides a minimal API that lets you manage the history stack, navigate, confirm navigation, and persist state between sessions. — React Training docs

    Each router component creates a history object that keeps track of the current location (history.location) and also the previous locations in a stack. 
    
    When the current location changes,the view is re-rendered and you get a sense of navigation. 
    The history object has methods such as history.push() and history.replace() to take care of that. 
    history.push() is invoked when you click on a <Link> component, and history.replace() is called when you use <Redirect>. Other methods — such as history.goBack() and history.goForward() — are used to navigate through the history stack by going back or forward a page.