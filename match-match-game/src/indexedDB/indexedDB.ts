import ModalPage from '../components/page/modalPage/modalPage';
import { MyRecord } from '../app.types';
import './indexedDB.scss';

export const resData: Array<MyRecord> = [];

export default class DataBase {
  public db!: IDBDatabase;

  private readonly modalPage: ModalPage;

  constructor() {
    this.modalPage = new ModalPage();
  }

  public init(dbName: string, version?: number): void {
    const iDB = window.indexedDB;
    const dbReq: IDBOpenDBRequest = iDB.open(dbName, version);

    dbReq.onupgradeneeded = () => {
      const database = dbReq.result;
      const store = database.createObjectStore('persons', {
        keyPath: 'email',
        autoIncrement: true,
      });
      store.createIndex('email', 'email', { unique: true });
      store.createIndex('score', 'score', { unique: false });
      this.db = database;
    };

    dbReq.onsuccess = (): void => {
      this.db = dbReq.result;
      this.getWrite();
    };
  }

  public addPersons(player: {
    firstName: string;
    lastName: string;
    email: string;
    imagesLoad: string;
    score: string | null;
  }): Promise<MyRecord> {
    return new Promise(resolve => {
      const tx = this.db.transaction(['persons'], 'readwrite');
      let transactionResult: MyRecord;

      tx.oncomplete = () => {
        resolve(transactionResult);
      };

      const store = tx.objectStore('persons');
      const note = player;
      const result = store.put(note);

      result.onsuccess = (): IDBValidKey => {
        return result.result;
      };
    });
  }

  write(): void {
    this.addPersons(this.modalPage.get());
  }

  public getWrite(): Promise<Array<MyRecord>> {
    return new Promise(resolve => {
      let tx: IDBTransaction | null = null;
      tx = this.db.transaction('persons', 'readonly');
      const store = tx.objectStore('persons');
      const result = store.index('score').openCursor(null, 'prev');
      result.onsuccess = (): void => {
        const cursor = result.result;

        if (cursor) {
          resData.push(cursor?.value);
        }

        cursor?.continue();
      };

      tx.oncomplete = (): void => {
        resolve(resData);
      };
    });
  }
}
