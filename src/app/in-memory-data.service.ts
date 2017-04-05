import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let goals = [
            { id: 1, name: 'Identify the problem' },
            { id: 2, name: 'Climb down there' },
            { id: 3, name: 'Fix it!' },
            { id: 4, name: 'Identify another problem' },
            { id: 5, name: 'Fix it!' },
            { id: 6, name: 'Keep identifying problems and fixing them until they are FIXED!' },
        ];
        return { goals };
    }
}
