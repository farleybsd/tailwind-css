import { input } from '@angular/core';
import { Component, TemplateRef } from '@angular/core';
import { tv } from 'tailwind-variants';

export type ButtonVariant = keyof (typeof Button.prototype.variants)['variants']['variant'];

export interface ButtonProps {
  children: TemplateRef<any> | string;
  variant?: ButtonVariant;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  variant = input<ButtonVariant>();
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input(false);

  variants = tv({
    base: 'bg-blue w-full px-4 py-2 outline-none cursor-pointer rounded-3xl text-white not-disabled:hover:bg-blue/80 font-medium duration-500 not-disabled:active:scale-95 disabled:opacity-45 disabled:cursor-not-allowed',
    variants: {
      variant: {
        small: 'w-auto py-1 px-5 text-sm',
      },
    },
  });

  get buttonClass() {
    return this.variants({ variant: this.variant() });
  }
}
