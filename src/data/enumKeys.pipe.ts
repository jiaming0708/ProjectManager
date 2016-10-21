import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumKeys' })
export class EnumKeysPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
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
        let keys = [];
        for (var enumMember in value) {
            var isValueProperty = parseInt(enumMember, 10) >= 0
            if (isValueProperty) {
                keys.push(enumMember);
                //console.log("enum member: ", enumMember);
            }
        }
        return keys;
    }
}
