import { render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';

import { Button } from ".";


describe('App', () => {
  it('should render the app', () => {
    const { getByText } = render(() => <Button>Click here</Button>);
    expect(getByText('Click here')).toBeInTheDocument();
  });
});