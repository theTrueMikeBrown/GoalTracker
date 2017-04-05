"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var goals = [
            { id: 1, name: 'Identify the problem' },
            { id: 2, name: 'Climb down there' },
            { id: 3, name: 'Fix it!' },
            { id: 4, name: 'Identify another problem' },
            { id: 5, name: 'Fix it!' },
            { id: 6, name: 'Keep identifying problems and fixing them until they are FIXED!' },
        ];
        return { goals: goals };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map