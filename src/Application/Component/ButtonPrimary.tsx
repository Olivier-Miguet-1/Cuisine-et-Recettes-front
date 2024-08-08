import {Button} from "@mantine/core";
import React from "react";
import {ComponentPropsType} from "../Type/CustomType.ts";

export const ButtonPrimary: React.FC<ComponentPropsType> = ({
    children,
    onClickButton,
    sizeButton = "compact-lg"
}) => {
    return (
        <>
            <Button
                onClick={onClickButton}
                size={sizeButton}
                c={"#000000"}
                radius={"lg"}
            >
                {children}
            </Button>
        </>
    )
}
