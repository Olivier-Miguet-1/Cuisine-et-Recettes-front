import {ActionIconVariant, FloatingPosition, MantineRadius, MantineSize, MantineSpacing, StyleProp} from "@mantine/core";
import React from "react";

type HandlerComponentType = () => void | undefined | Promise<void>

type PropsType = {
    isDark?: boolean
    children?: React.ReactNode | string
}

type TooltipPropsType = {
    labelTooltip? : React.ReactNode | null
    positionTooltip?: FloatingPosition
}

type ActionIconPropsType = {
    onClickActionIcon?: HandlerComponentType
    variantActionIcon?: ActionIconVariant
    sizeActionIcon?: number | MantineSize
    radiusActionIcon?: MantineRadius
    mlActionIcon?: StyleProp<MantineSpacing>
    mrActionIcon?: StyleProp<MantineSpacing>
    childrenActionIcon?: React.ReactNode
    loadingActionIcon?: boolean
}

type IconPropsType = {
    sizeIcon?: number | MantineSize
    strokeWidthIcon?: string | number
}

type ButtonPropsType = {
    onClickButton?: HandlerComponentType
    variantButton?: ActionIconVariant
    sizeButton?: MantineSize | (string & {}) | "compact-lg" | "compact-xs" | "compact-sm" | "compact-md" | "compact-xl" | undefined
    radiusButton?: MantineRadius
    mlButton?: StyleProp<MantineSpacing>
    mrButton?: StyleProp<MantineSpacing>
    childrenButton?: React.ReactNode
    loadingButton?: boolean
}

export type ComponentPropsType =
    PropsType &
    TooltipPropsType &
    ActionIconPropsType &
    IconPropsType &
    ButtonPropsType
