import React from "react";
import { act } from "react-dom/test-utils";
import styles from './style.module.scss';
import FilterValue from "./index";
import { fireEvent } from "@testing-library/react";
import { createRoot, Root } from "react-dom/client";

describe('FilterValue -->', () => {
    let container: HTMLDivElement | null = null;
    let root: Root | null = null;
    const onChangeMock = jest.fn();
    let defaultProps = {
        label: 'Filter',
        onChange: onChangeMock,
        isChecked: false,
    };

    beforeEach(() => {
        act(() => {
            container = document.createElement("div");
            root = createRoot(container);
        });
    });

    afterEach(() => {
        act(() => {
            if (root && container) {
                root.unmount();
                container.remove();
                container = null;
            }
        });
    });

    it('Renders right label', () => {
        act(() => {
            root?.render(<FilterValue {...defaultProps} />);
        });

        const labelText = container?.querySelector('span')?.textContent;
        expect(labelText).toBe(defaultProps.label);
    });

    it('Renders checked', () => {
        act(() => {
            root?.render(<FilterValue {...defaultProps} isChecked={true} />);
        });

        const spanClasses = container?.querySelector('span')?.classList;
        expect(spanClasses?.contains(styles.checkbox_checked)).toBe(true);
    });

    it('Input onChange works', () => {
        act(() => {
            root?.render(<FilterValue {...defaultProps} isChecked={true} />);
        });

        const label = container?.querySelector('label');
        if (!label) throw new Error('Label render error');
        fireEvent.click(label);

        expect(onChangeMock).toBeCalledTimes(1);
    });
});

