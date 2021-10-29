import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

test("renders without errors", () => 
{
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => 
{
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name:/i);
    const firstName = "Alex";
    userEvent.type(firstNameInput, firstName);

    const lastNameInput = screen.getByLabelText(/last name:/i);
    const lastName = "Laptev";
    userEvent.type(lastNameInput, lastName);

    const addressInput = screen.getByLabelText(/address:/i);
    const address = "5520 Ivyridge Lane";
    userEvent.type(addressInput, address);

    const cityInput = screen.getByLabelText(/city:/i);
    const city = "McKinney";
    userEvent.type(cityInput, city);

    const stateInput = screen.getByLabelText(/state:/i);
    const state = "TX";
    userEvent.type(stateInput, state);

    const zipInput = screen.getByLabelText(/zip:/i);
    const zip = "75071";
    userEvent.type(zipInput, zip);

    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);

    await waitFor(() =>
    {
        const successMessageRender = screen.queryByTestId("successMessage");
        const firstNameRender = screen.queryByTestId("firstName");
        const lastNameRender = screen.queryByTestId("lastName");
        const addressRender = screen.queryByTestId("address");
        const cityRender = screen.queryByTestId("city");
        const zipRender = screen.queryByTestId("zip");

        expect(successMessageRender).toBeVisible();
        expect(firstNameRender).toBeVisible();
        expect(lastNameRender).toBeVisible();
        expect(addressRender).toBeVisible();
        expect(cityRender).toBeVisible();
        expect(zipRender).toBeVisible();
    });
});
