import { ModalPage } from '../components/page/modalPage/modalPage';
import './indexedDB.scss';

export const resData: Array<any> = [];
console.log(resData);
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
      const store = database.createObjectStore('persons', {
        keyPath: 'email',
        autoIncrement: true,
      });
      store.createIndex('email', 'email', { unique: true });
      store.createIndex('score', 'score', { unique: false });
      this.db = database;
    };

    dbReq.onsuccess = () => {
      this.db = dbReq.result;
      // this.getAndDisplayNotes(this.db);
      this.getWrite();
      // this.write();
    };

    dbReq.onerror = () => {
      alert(`error opening database ${dbReq.result}`);
    };
  }

  public addPersons(player: {
    firstName: string;
    lastName: string;
    email: string;
    score: unknown;
  }) {
    // return new Promise((resolve, reject) => {
    const tx = this.db.transaction(['persons'], 'readwrite');
    const store = tx.objectStore('persons');
    const note = player;
    store.put(note);
    // tx.oncomplete = () => {

    // };
    // });
  }

  public write(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.addPersons(this.modalPage.get());
    });
  }

  public getWrite() {
    return new Promise((resolve, reject) => {
      let tx: IDBTransaction | null = null;
      tx = this.db.transaction('persons', 'readonly');
      const store = tx.objectStore('persons');
      const result = store.index('score').openCursor(null, 'prev');
      result.onsuccess = () => {
        const cursor = result.result;
        if (cursor) {
          resolve(resData.push(cursor?.value));
        }
        cursor?.continue();
      };
      tx.oncomplete = () => {
        resolve(resData);
        console.log(resData);
      };
    });
  }
  // public getAndDisplayNotes = (db: IDBDatabase) => {
  //   const tx = db.transaction('persons', 'readonly');
  //   const store = tx.objectStore('persons');
  //   const result = store.getAll();
  //   let nodeList: string = '';
  //   tx.oncomplete = () => {
  //     this.displayNotes(result.result);
  //   };
  // };

  // public displayNotes = (notes: string | any[]) => {
  //   let listHTML = '<ul class="score-persons-db">';
  //   for (let i = 0; i < 10; i++) {
  //     const note = notes[i];
  //     listHTML += `
  //     <li class="score-persons-db__item">
  //       Firstname: ${note.firstName} | Lastname: ${note.lastName} | Email: ${note.email} | Score:  ${note.score}
  //     </li>
  //     `;
  //   }
  //   listHTML + '</ul>';
  //   return listHTML;
  // };
}
