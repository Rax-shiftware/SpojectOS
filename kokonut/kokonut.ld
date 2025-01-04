/* kokonut.ld - Linker script */

ENTRY(_start)

SECTIONS
{
    /* Define the entry point */
    . = 0x10000;
    .text : {
        *(.text)
    }

    .rodata : {
        *(.rodata)
    }

    .data : {
        *(.data)
    }

    .bss : {
        *(.bss)
    }

    /DISCARD/ : {
        *(.eh_frame)
    }
}
.equdb : {
    *(.equdb)
}