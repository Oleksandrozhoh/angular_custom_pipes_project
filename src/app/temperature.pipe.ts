import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temperature',
    standalone: true,
})
export class TemperaturePipe implements PipeTransform {
    transform(data: string | number | null, inputType : 'cel' | 'fah', outputType : 'cel' | 'fah'): string {

        let val : number;

        if (data === null || data === undefined) {
            return 'No temp data';
        }

        if (typeof data === 'string') {
            val = parseFloat(data);
        } else if (typeof data === 'number') {
            val = data;
        } else {
            throw new Error("Invalid data type for temperature conversion");
        }

        if (inputType === 'cel' && outputType === 'cel') {
            return `${val} °C`;
        }
        else if (inputType === 'fah' && outputType === 'fah') {
            return `${val} °F`;
        }
        else if (inputType === 'cel' && outputType === 'fah') {
            return`${((val * 9/5) + 32).toFixed(2)} °F`;
        }
        else if (inputType === 'fah' && outputType === 'cel') {
            return `${((val - 32) * 5/9).toFixed(2)} °C`;
        }else {
            throw new Error("Invalid input or output type for temperature conversion");
        }
    };
}