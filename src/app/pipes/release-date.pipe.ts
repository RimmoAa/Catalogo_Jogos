import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'releaseDate'
})
export class ReleaseDatePipe implements PipeTransform {

transform(value: string): string {
if (!value) return 'Data não disponível';
  const date = new Date(value);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

if (diffDays < 30) {
  return `Lançado há ${diffDays} dias`;
}
 else if (diffDays < 365) {
const months = Math.floor(diffDays / 30);
return `Lançado há ${months} ${months === 1 ? 'mês' :
'meses'}`;

} 
else {
const years = Math.floor(diffDays / 365);
return `Lançado há ${years} ${years === 1 ? 'ano' :
'anos'}`;
    }
  }
}
