import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Card {
  label: string;
  value: number;
}

@Component({
  selector: 'app-bloco-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bloco-cards.component.html',
  styleUrl: './bloco-cards.component.scss',
})
export class BlocoCardsComponent {
  @Input() title: string = ''; 
  @Input() cards: Card[] = [];
}
