import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumKeys' })
export class EnumKeysPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        /*
          enum Sample{
              FirstName=0,
              LastName
          }

          print
          0
          1
          FirstName
          LastName
          
          this pipe will output number, not include string
          0
          1
        */
        if (!args) {
            args = [];
        }

        let keys = [];
        for (var enumMember in value) {
            var enumMemeberNumber = parseInt(enumMember, 10);
            if (enumMemeberNumber >= 0 && args.indexOf(enumMemeberNumber) < 0) {
                keys.push(enumMember);
                //console.log("enum member: ", enumMember);
            }
        }
        return keys;
    }
}
