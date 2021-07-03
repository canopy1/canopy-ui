import { html } from "lit";
import "./am_schedule";
// import { AmScheduleItemsProp } from "./am_schedule";

export default {
  title: "Components/AmSchedule",
  parameters:{
    layout: 'padded',
  },
};

const Story = () => {
  const someAmItems = [
    {
      "line_item_id": 400,
      "cycle_exclusive_end": "2018-07-20T09:10:14+00:00",
      "min_pay_due_at": "2018-07-20T09:10:14+00:00",
      "am_min_pay_cents": 84000,
      "am_cycle_payment_cents": 84000,
      "am_interest_cents": 10000,
      "am_deferred_cents": 4000,
      "am_principal_cents": 70000,
      "am_start_principal_balance_cents": 136691,
      "am_end_principal_balance_cents": 136691,
      "am_start_total_balance_cents": 136691,
      "am_end_total_balance_cents": 136691,
      "paid_on_time": true
    },
    {
      "line_item_id": 401,
      "cycle_exclusive_end": "2018-08-20T09:10:14+00:00",
      "min_pay_due_at": "2018-08-20T09:10:14+00:00",
      "am_min_pay_cents": 84000,
      "am_cycle_payment_cents": 18325,
      "am_interest_cents": 10000,
      "am_deferred_cents": 4000,
      "am_principal_cents": 70000,
      "am_start_principal_balance_cents": 136691,
      "am_end_principal_balance_cents": 136691,
      "am_start_total_balance_cents": 136691,
      "am_end_total_balance_cents": 136691,
      "paid_on_time": true
    },
    {
      "line_item_id": 401,
      "cycle_exclusive_end": "2018-09-20T09:10:14+00:00",
      "min_pay_due_at": "2018-09-20T09:10:14+00:00",
      "am_min_pay_cents": 84000,
      "am_cycle_payment_cents": 0,
      "am_interest_cents": 10000,
      "am_deferred_cents": 4000,
      "am_principal_cents": 70000,
      "am_start_principal_balance_cents": 136691,
      "am_end_principal_balance_cents": 136691,
      "am_start_total_balance_cents": 136691,
      "am_end_total_balance_cents": 136691,
      "paid_on_time": true
    }
  ]
  
  return html`
    <cui-am-schedule
      items=${JSON.stringify(someAmItems)}
    >
    </cui-am-schedule>
  `
}

export const Default = Story.bind({});

