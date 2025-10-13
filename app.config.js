export default defineAppConfig({
  ui: {
    primary: 'coffee-gold',
    gray: 'coffee-stone',

    // Input component theme
    input: {
      base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
      form: 'form-input',
      rounded: 'rounded-lg',
      placeholder: 'placeholder-coffee-stone/70',
      file: {
        base: 'file:mr-1.5 file:font-medium file:text-coffee-bean dark:file:text-coffee-cream file:bg-transparent file:border-0 file:outline-none'
      },
      size: {
        '2xs': 'text-xs',
        xs: 'text-sm',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg px-4 py-3',
        xl: 'text-xl'
      },
      gap: {
        '2xs': 'gap-x-1',
        xs: 'gap-x-1.5',
        sm: 'gap-x-1.5',
        md: 'gap-x-2',
        lg: 'gap-x-2.5',
        xl: 'gap-x-2.5'
      },
      padding: {
        '2xs': 'px-2 py-1',
        xs: 'px-2.5 py-1.5',
        sm: 'px-2.5 py-1.5',
        md: 'px-3 py-2',
        lg: 'px-4 py-3',
        xl: 'px-4 py-3'
      },
      leading: {
        padding: {
          '2xs': 'ps-7',
          xs: 'ps-8',
          sm: 'ps-9',
          md: 'ps-10',
          lg: 'ps-11',
          xl: 'ps-12'
        }
      },
      trailing: {
        padding: {
          '2xs': 'pe-7',
          xs: 'pe-8',
          sm: 'pe-9',
          md: 'pe-10',
          lg: 'pe-11',
          xl: 'pe-12'
        }
      },
      color: {
        white: {
          outline: 'shadow-sm bg-white text-coffee-bean ring-1 ring-inset ring-coffee-clay/40 focus:ring-2 focus:ring-coffee-gold placeholder:text-coffee-stone/70'
        },
        gray: {
          outline: 'shadow-sm bg-coffee-paper text-coffee-bean ring-1 ring-inset ring-coffee-clay/40 focus:ring-2 focus:ring-coffee-gold placeholder:text-coffee-stone/70'
        }
      },
      variant: {
        outline: 'shadow-sm bg-white text-coffee-bean ring-1 ring-inset ring-coffee-clay/40 focus:ring-2 focus:ring-coffee-gold transition-all duration-200 ease-in-out placeholder:text-coffee-stone/70 hover:ring-coffee-gold/50',
        none: 'bg-transparent focus:ring-0 focus:shadow-none'
      },
      icon: {
        base: 'flex-shrink-0 text-coffee-stone',
        color: 'text-coffee-stone',
        loading: 'animate-spin',
        size: {
          '2xs': 'h-4 w-4',
          xs: 'h-4 w-4',
          sm: 'h-5 w-5',
          md: 'h-5 w-5',
          lg: 'h-6 w-6',
          xl: 'h-6 w-6'
        },
        leading: {
          wrapper: 'absolute inset-y-0 start-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'px-2',
            xs: 'px-2.5',
            sm: 'px-2.5',
            md: 'px-3',
            lg: 'px-3.5',
            xl: 'px-3.5'
          }
        },
        trailing: {
          wrapper: 'absolute inset-y-0 end-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'px-2',
            xs: 'px-2.5',
            sm: 'px-2.5',
            md: 'px-3',
            lg: 'px-3.5',
            xl: 'px-3.5'
          }
        }
      },
      default: {
        size: 'md',
        color: 'white',
        variant: 'outline',
        loadingIcon: 'i-heroicons-arrow-path-20-solid'
      }
    },

    // Textarea component theme
    textarea: {
      base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 resize-y',
      form: 'form-textarea',
      rounded: 'rounded-lg',
      placeholder: 'placeholder-coffee-stone/70',
      size: {
        '2xs': 'text-xs',
        xs: 'text-sm',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg px-4 py-3',
        xl: 'text-xl'
      },
      gap: {
        '2xs': 'gap-x-1',
        xs: 'gap-x-1.5',
        sm: 'gap-x-1.5',
        md: 'gap-x-2',
        lg: 'gap-x-2.5',
        xl: 'gap-x-2.5'
      },
      padding: {
        '2xs': 'px-2 py-1',
        xs: 'px-2.5 py-1.5',
        sm: 'px-2.5 py-1.5',
        md: 'px-3 py-2',
        lg: 'px-4 py-3',
        xl: 'px-4 py-3'
      },
      color: {
        white: {
          outline: 'shadow-sm bg-white text-coffee-bean ring-1 ring-inset ring-coffee-clay/40 focus:ring-2 focus:ring-coffee-gold placeholder:text-coffee-stone/70'
        },
        gray: {
          outline: 'shadow-sm bg-coffee-paper text-coffee-bean ring-1 ring-inset ring-coffee-clay/40 focus:ring-2 focus:ring-coffee-gold placeholder:text-coffee-stone/70'
        }
      },
      variant: {
        outline: 'shadow-sm bg-white text-coffee-bean ring-1 ring-inset ring-coffee-clay/40 focus:ring-2 focus:ring-coffee-gold transition-all duration-200 ease-in-out placeholder:text-coffee-stone/70 hover:ring-coffee-gold/50',
        none: 'bg-transparent focus:ring-0 focus:shadow-none'
      },
      default: {
        size: 'md',
        color: 'white',
        variant: 'outline'
      }
    },

    // FormGroup component theme
    formGroup: {
      wrapper: '',
      label: {
        wrapper: 'flex content-center items-center justify-between',
        base: 'block font-medium text-coffee-bean text-base mb-2',
        required: "after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"
      },
      size: {
        '2xs': 'text-xs',
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl'
      },
      container: 'mt-1 relative',
      description: 'text-coffee-stone text-sm mt-2',
      hint: 'text-coffee-stone text-sm',
      help: 'mt-2 text-sm text-coffee-stone',
      error: 'mt-2 text-sm text-red-500 dark:text-red-400',
      default: {
        size: 'md'
      }
    },

    // Button theme (enhancing your existing buttons)
    button: {
      base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-lg text-sm gap-x-2 px-3.5 py-2.5 shadow-sm transition-all duration-200 ease-in-out',
      font: 'font-medium',
      rounded: 'rounded-lg',
      truncate: 'text-left break-all line-clamp-1',
      block: 'w-full flex justify-center items-center',
      inline: 'inline-flex items-center',
      loading: 'cursor-wait',
      size: {
        '2xs': 'text-xs gap-x-1 px-2 py-1',
        xs: 'text-xs gap-x-1.5 px-2.5 py-1.5',
        sm: 'text-sm gap-x-1.5 px-2.5 py-1.5',
        md: 'text-sm gap-x-2 px-3.5 py-2.5',
        lg: 'text-base gap-x-2.5 px-4 py-3',
        xl: 'text-base gap-x-2.5 px-4 py-3'
      },
      gap: {
        '2xs': 'gap-x-1',
        xs: 'gap-x-1.5',
        sm: 'gap-x-1.5',
        md: 'gap-x-2',
        lg: 'gap-x-2.5',
        xl: 'gap-x-2.5'
      },
      padding: {
        '2xs': 'px-2 py-1',
        xs: 'px-2.5 py-1.5',
        sm: 'px-2.5 py-1.5',
        md: 'px-3.5 py-2.5',
        lg: 'px-4 py-3',
        xl: 'px-4 py-3'
      },
      square: {
        '2xs': 'p-1',
        xs: 'p-1.5',
        sm: 'p-1.5',
        md: 'p-2.5',
        lg: 'p-3',
        xl: 'p-3'
      },
      color: {
        primary: {
          solid: 'shadow-sm text-white bg-coffee-gold hover:bg-coffee-copper disabled:bg-coffee-gold/50 focus-visible:ring-2 focus-visible:ring-coffee-gold focus-visible:ring-offset-2',
          outline: 'ring-1 ring-inset ring-coffee-gold text-coffee-gold hover:bg-coffee-gold hover:text-white disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-coffee-gold',
          soft: 'text-coffee-gold bg-coffee-gold/10 hover:bg-coffee-gold/20 disabled:bg-coffee-gold/10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-coffee-gold',
          ghost: 'text-coffee-gold hover:bg-coffee-gold/10 disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-coffee-gold',
          link: 'text-coffee-gold hover:text-coffee-copper disabled:text-coffee-gold focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-coffee-gold'
        }
      },
      variant: {
        solid: 'shadow-sm text-white bg-coffee-gold hover:bg-coffee-copper disabled:bg-coffee-gold/50 focus-visible:ring-2 focus-visible:ring-coffee-gold focus-visible:ring-offset-2',
        outline: 'ring-1 ring-inset ring-current text-coffee-gold hover:bg-coffee-gold hover:text-white disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-current',
        soft: 'text-coffee-gold bg-coffee-gold/10 hover:bg-coffee-gold/20 disabled:bg-coffee-gold/10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-coffee-gold',
        ghost: 'text-coffee-gold hover:bg-coffee-gold/10 disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-coffee-gold',
        link: 'text-coffee-gold hover:text-coffee-copper underline-offset-4 hover:underline disabled:text-coffee-gold focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-coffee-gold'
      },
      icon: {
        base: 'flex-shrink-0',
        loading: 'animate-spin',
        size: {
          '2xs': 'h-4 w-4',
          xs: 'h-4 w-4',
          sm: 'h-5 w-5',
          md: 'h-5 w-5',
          lg: 'h-5 w-5',
          xl: 'h-6 w-6'
        }
      },
      default: {
        size: 'md',
        variant: 'solid',
        color: 'primary',
        loadingIcon: 'i-heroicons-arrow-path-20-solid'
      }
    }
  }
})