import { AnimationEntryMetadata } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

// Component transition animations
export const appearAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*', style({
        opacity: 1,
        //transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
        style({
        opacity: 0,
        //transform: 'translateX(-100%)'
      }),
      animate('0.5s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        //transform: 'translateY(100%)'
      }))
    ])
  ]);

  export const recordAnimation: AnimationEntryMetadata =
    trigger('record', [
      state('gone', style({
        opacity: 0.0,
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0
      })),
      transition('* => gone', [
        animate('0ms 500ms ease-out')
      ])
    ]);