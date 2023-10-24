import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import User from './User';

describe('Login test cases', () => {
    // using get by function
    it('get by role', () => {
        render(<User />);

        const result = screen.getByRole('heading');

        expect(result).toHaveTextContent('Register');
    });

    it('get by test id', () => {
        render(<User />);

        const result = screen.getByTestId('hello');

        expect(result).toHaveTextContent('Register');
    });

    it('get by placeholder', () => {
        render(<User />);

        const result = screen.getByPlaceholderText('myInput');

        expect(result).toBeInTheDocument();
    });

    it('get by label text', () => {
        render(<User />);

        const result = screen.getByLabelText('Firstname');

        expect(result).toBeInTheDocument();
    });

    it('get by image alt text', () => {
        render(<User />);

        const result = screen.getByAltText('Demi Img');

        expect(result).toBeInTheDocument();
    });

    // using query by function
    it('query by role', () => {
        render(<User />);

        const result = screen.queryByRole('heading');

        expect(result).toHaveTextContent('Register');
    });

    it('query by test id', () => {
        render(<User />);

        const result = screen.queryByTestId('hello');

        expect(result).toHaveTextContent('Register');
    });

    it('query by placeholder', () => {
        render(<User />);

        const result = screen.queryByPlaceholderText('myInput');

        expect(result).toBeInTheDocument();
    });

    it('query by label text', () => {
        render(<User />);

        const result = screen.queryByLabelText('Firstname');

        expect(result).toBeInTheDocument();
    });

    it('query by image alt text', () => {
        render(<User />);

        const result = screen.queryByAltText('Demi Img');

        expect(result).toBeInTheDocument();
    });

    // using find by function
    it('find by role', async () => {
        render(<User />);

        const result = await screen.findByRole('heading');

        expect(result).toHaveTextContent('Register');
    });

    it('find by test id', async () => {
        render(<User />);

        const result = await screen.findByTestId('hello');

        expect(result).toHaveTextContent('Register');
    });

    it('find by placeholder', async () => {
        render(<User />);

        const result = await screen.findByPlaceholderText('myInput');

        expect(result).toBeInTheDocument();
    });

    it('find by label text', async () => {
        render(<User />);

        const result = await screen.findByLabelText('Firstname');

        expect(result).toBeInTheDocument();
    });

    it('find by image alt text', async () => {
        render(<User />);

        const result = await screen.findByAltText('Demi Img');

        expect(result).toBeInTheDocument();
    });

});
