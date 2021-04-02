import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import * as Settings from "../../settingsHandler";

import { linkGroup } from "../../../../data/data";

const StyledOptionTextArea = styled.div<{ error?: string }>`
    position: relative;
    border: 2px solid var(--default-color);
    display:flex;
    padding: 10px 0 10px 20px;
    height: calc(100% - 40px);
    ${({ error }) => error && `
        ::after{
            content: "${error}";
            color: var(--accent-color);
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 0.8rem;
        }
    `}
`;

const StyledTextArea = styled.textarea`
    background-color: var(--bg-color);
    color: var(--default-color);
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    resize: none;
`;

const placeholder = JSON.stringify(
    [
        {
            title: "Title",
            links: [
                {
                    label: "label",
                    value: "url",
                },
                {
                    label: "label",
                    value: "url",
                },
                {
                    label: "label",
                    value: "url",
                },
            ]
        },
    ], null, 4);

type props = {
    initialValue: linkGroup[],
    onChange: (value: linkGroup[]) => void,
}

export const OptionTextArea = ({ initialValue, onChange }: props) => {
    const [error, setError] = useState<string | undefined>(undefined);
    const [value, setValue] = useState(JSON.stringify(initialValue, null, 4));

    useEffect(() => {
        setValue(JSON.stringify(initialValue, null, 4));
    }, [initialValue])

    const tryOnChangeEvent = (linkGroups: string) => {
        setValue(linkGroups);
        try {
            const parsedData = Settings.Links.parse(linkGroups);
            setError(undefined);
            onChange(parsedData);
        } catch { setError("Your links are not parseable. Probably you have a Syntax Error?") }
    }

    return <StyledOptionTextArea error={error}>
        <StyledTextArea
            onChange={e => tryOnChangeEvent(e.currentTarget.value)}
            placeholder={placeholder}
            value={value}
        />
    </StyledOptionTextArea>
}