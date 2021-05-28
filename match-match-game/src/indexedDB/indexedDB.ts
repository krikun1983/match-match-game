export class DataBasa {
  public db!: IDBDatabase;

  public init(dbName: string, version?: number): void {
    const iDB = window.indexedDB;
    const dbReq: IDBOpenDBRequest = iDB.open(dbName, version);

    dbReq.onupgradeneeded = () => {
      const database = dbReq.result;
      let store = database.createObjectStore('persons', { keyPath: "email", autoIncrement: true });
      store.createIndex('email', 'email', { unique: true });
      store.createIndex('score', 'score', { unique: false });
      this.db = database;
    }

    dbReq.onsuccess = () => {
      this.db = dbReq.result;
      console.log(this.db);
    }

    dbReq.onerror = () => {
      alert('error opening database ' + dbReq.result);
    }
  }

  private addPersons(firstName: string, lastName: string, email: string): void {
    let tx: IDBTransaction | null = null;
    tx = this.db.transaction(['persons'], 'readwrite');
    let store = tx.objectStore('persons');
    let note = { 'firstName': firstName, 'lastName': lastName, 'email': email, timestamp: Date.now() };
    store.put(note);
  }

  public write(): void {
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');
    this.addPersons((<HTMLInputElement>firstName)?.value, (<HTMLInputElement>lastName)?.value, (<HTMLInputElement>email)?.value);
    (<HTMLInputElement>firstName).value = '';
    (<HTMLInputElement>lastName).value = '';
    (<HTMLInputElement>email).value = '';
  }
}
