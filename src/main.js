function ExtensionViewModel(data = null) {
    const self = this;
    self.status = ko.observable(JSON.stringify(data, null, 2));
}

function applySecureBindings() {
    const options = {
        attribute: 'data-bind',
        globals: window,
        bindings: ko.bindingHandlers,
        noVirtualElements: false
    };
    chrome.storage.sync.get({ storedData: {} }, data => {
        ko.bindingProvider.instance = new ko.secureBindingsProvider(options);
        ko.applyBindings(new ExtensionViewModel(data));
    });    
}

document.addEventListener('DOMContentLoaded', applySecureBindings);