import { ModalPage } from '../components/page/modalPage/modalPage';

export class DataBasa {
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
      const store = database.createObjectStore('persons', { keyPath: 'email', autoIncrement: true });
      store.createIndex('email', 'email', { unique: true });
      store.createIndex('score', 'score', { unique: false });
      this.db = database;
    };

    dbReq.onsuccess = () => {
      this.db = dbReq.result;
    };

    dbReq.onerror = () => {
      alert(`error opening database ${dbReq.result}`);
    };
  }

  private addPersons(player: { firstName: string; lastName: string; email: string; }): void {
    let tx: IDBTransaction | null = null;
    tx = this.db.transaction(['persons'], 'readwrite');
    const store = tx.objectStore('persons');
    const note = player;
    store.put(note);
  }

  public write(): void {
    this.addPersons(this.modalPage.get());
  }
}
