import React from "react";
import { act } from "react-dom/test-utils";
import styles from './style.module.scss';
import AdvisorCard, { IAdvisorCardProps } from "./index";
import { createRoot, Root } from "react-dom/client";

describe('FilterValue -->', () => {
    let container: HTMLDivElement | null = null;
    let root: Root | null = null;
    let defaultProps: IAdvisorCardProps = {
        advisor: {
            id: 'id',
            reviews: [],
            status: 'offline',
            lang: 'de',
            firstName: 'John',
            lastName: 'doe',
        }
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

    it('Renders right name -->', () => {
        act(() => {
            root?.render(<AdvisorCard {...defaultProps} />);
        });

        const name = container?.querySelector('h3')?.textContent;
        expect(name).toBe(`${defaultProps.advisor.firstName} ${defaultProps.advisor.lastName}`);
    });

    it('Renders right lang -->', () => {
        act(() => {
            root?.render(<AdvisorCard {...defaultProps} />);
        });

        const lang = container?.getElementsByClassName(styles.card__language)[0]?.textContent;
        expect(lang).toBe(`Language: ${defaultProps.advisor.lang}`);
    });

    it('Renders right status -->', () => {
        act(() => {
            root?.render(<AdvisorCard {...defaultProps} />);
        });

        const status = container?.getElementsByClassName(styles.card__status)[0]?.textContent;
        expect(status).toBe(defaultProps.advisor.status);
    });

    it('Renders right reviews count -->', () => {
        act(() => {
            root?.render(<AdvisorCard {...defaultProps} />);
        });

        const status = container?.getElementsByClassName(styles.card__reviews)[0]?.textContent;
        expect(status).toBe(`Reviews count: ${defaultProps.advisor.reviews.length}`);
    });
});

