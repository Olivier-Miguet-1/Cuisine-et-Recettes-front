import {Button} from "@mantine/core";
import React from "react";
import {ComponentPropsType} from "../Type/CustomType.ts";

export const ButtonMenu: React.FC<ComponentPropsType> = ({
    children,
    onClickButton,
}) => {
    return (
        <>
            <Button
                onClick={onClickButton}
                size={"lg"}
                c={"#000000"}
                radius={"lg"}
            >
                {children}
            </Button>
        </>
    )
}