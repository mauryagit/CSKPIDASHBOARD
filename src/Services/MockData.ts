export interface ILocation {
  title: string;
}
export class MockLocationData {
  private locations: ILocation[] = [];

  constructor() {
    //console.info(JSON.stringify(this.getLocation()));
  }
  getLocationForService(): void {}

  addLocation(name: string) {
    this.locations.push({ title: name });
  }
  updateLocation(oldvalue: string, newvalue: string) {
    let location: ILocation[] = this.locations.filter(function(val, i, arr) {
      return val.title.toLowerCase() !== oldvalue.toLowerCase();
    });
    location.push({ title: name });
    this.locations = location;
  }
  deleteLocation(value: string) {
    let location: ILocation[] = this.locations.filter(function(val, i, arr) {
      return val.title.toLowerCase() !== value.toLowerCase();
    });
    this.locations = location;
  }
  getLocation(): any {
    return {
      d: {
        results: [
          {
            __metadata: {
              id: "70cde6b7-7211-4243-8315-2270a93cb28c",
              uri:
                "http://sidcitspqaapp02:8080/sites/CSKPI/_api/Web/Lists(guid'c88355a1-0904-4334-ad3f-79d48a30a088')/Items(1)",
              etag: '"1"',
              type: "SP.Data.LocationListItem"
            },
            FileSystemObjectType: 0,
            Id: 1,
            ContentTypeId: "0x01005AE223F7327561418DF124BD52613CFB",
            Title: "DMD",
            ID: 1,
            Modified: "2018-08-22T09:25:44Z",
            Created: "2018-08-22T09:25:44Z",
            AuthorId: 2,
            EditorId: 2,
            OData__UIVersionString: "1.0",
            Attachments: false,
            GUID: "c7c5b84f-3c46-4d90-bc7d-1ec7702c7647"
          },
          {
            __metadata: {
              id: "bd7025d0-e121-49a6-ba92-a5ca453b8f53",
              uri:
                "http://sidcitspqaapp02:8080/sites/CSKPI/_api/Web/Lists(guid'c88355a1-0904-4334-ad3f-79d48a30a088')/Items(3)",
              etag: '"1"',
              type: "SP.Data.LocationListItem"
            },
            FileSystemObjectType: 0,
            Id: 3,
            ContentTypeId: "0x01005AE223F7327561418DF124BD52613CFB",
            Title: "SMD",
            ID: 3,
            Modified: "2018-08-23T09:19:12Z",
            Created: "2018-08-23T09:19:12Z",
            AuthorId: 2,
            EditorId: 2,
            OData__UIVersionString: "1.0",
            Attachments: false,
            GUID: "e90c3f7a-4184-4f9c-b115-da3e078e61b6"
          }
        ]
      }
    };
  }
}
