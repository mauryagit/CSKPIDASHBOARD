export interface IOperationarea {
  ID: number;
  Title: string;
  Order: number;
}
export class Operationarea implements IOperationarea {
  public operationarea: IOperationarea[] = [];
  constructor() {
    const this1 = this;
    let items: any = this.getOperationAreaList();
    items.d.results.map(function(val, index) {
      this1.operationarea.push({
        ID: val["ID"],
        Title: val["Title"],
        Order: val["Order0"]
      });
    });
  }
  addOperationArea(obj: any[]) {
    debugger;

    this.operationarea.push({
      ID: this.operationarea.length + 1,
      Title: obj["Title"],
      Order: obj["Order"]
    });
  }
  updateOperationArea(oldvalue: any[], newvalue: any[]) {
    let operationarea: IOperationarea[] = this.operationarea.filter(function(
      val,
      i,
      arr
    ) {
      return val.Title.toLowerCase() !== oldvalue["Title"].toLowerCase();
    });
    operationarea.push({
      ID: newvalue["ID"],
      Title: newvalue["Title"],
      Order: newvalue["Order"]
    });
    this.operationarea = operationarea;
  }
  deleteOperationArea(value: any[]) {
    debugger;
    let operationarea: IOperationarea[] = this.operationarea.filter(function(
      val,
      i,
      arr
    ) {
      return val.ID !== parseInt(value["ID"]);
    });
    this.operationarea = operationarea;
  }
  getOperationAreaList(): any {
    return {
      d: {
        results: [
          {
            FileSystemObjectType: 0,
            Id: 1,
            ContentTypeId: "0x0100123E612B2C92E44EB32E2FFC61DE9BCE",
            Title: "HSEF",
            Order0: 1,
            ID: 1,
            Modified: "2018-08-22T09:26:45Z",
            Created: "2018-08-22T09:26:45Z",
            AuthorId: 2,
            EditorId: 2,
            OData__UIVersionString: "1.0",
            Attachments: false,
            GUID: "f14a97ae-1c2a-4820-bc78-ed37ca9b7c58"
          },
          {
            FileSystemObjectType: 0,
            Id: 2,
            ContentTypeId: "0x0100123E612B2C92E44EB32E2FFC61DE9BCE",
            Title: "Loreum",
            Order0: 2,
            ID: 2,
            Modified: "2018-08-22T09:26:45Z",
            Created: "2018-08-22T09:26:45Z",
            AuthorId: 2,
            EditorId: 2,
            OData__UIVersionString: "1.0",
            Attachments: false,
            GUID: "f14a97ae-1c2a-4820-bc78-ed37ca9b7c58"
          }
        ]
      }
    };
  }
}
