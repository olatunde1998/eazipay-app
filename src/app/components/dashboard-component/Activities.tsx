
import { Table } from "@/app/components/index";


export const Activities = () => {
  return (
    <>
      <div>
      <section>
            <div>
              <p className="mb-4 mt-16">Wednessday, November 09, 2022</p>
              <Table
                fullName="Badmus Kennis"
                cardTitle="Payroll"
                imgUrl="BM"
                activityHeading="Activity"
                activityContent="Paid November 2022 salary"
                employeeHeading="Employee"
                employeeContent="52"
                timeHeading="Time"
                timeContent="16:15"
              />

              <Table
                cardTitle="Employee Management"
                fullName="Badmus Kennis"
                imgUrl="BM"
                activityHeading="Activity"
                activityContent="Add new employee"
                employeeHeading="Employee"
                employeeContent="04"
              />
            </div>
            <div>
              <p className="mb-4 mt-16">Friday, November 04, 2022</p>
              <Table
                fullName="Badmus Kennis"
                cardTitle="Bonus"
                imgUrl="BM"
                activityHeading="Activity"
                activityContent="Paid November 2022 salary"
                employeeHeading="Bonus Name"
                employeeContent="XMAS Bonus"
              />
              <Table
                fullName="Badmus Kennis"
                cardTitle="Payroll"
                imgUrl="BM"
                activityHeading="Activity"
                activityContent="Paid November 2022 salary"
                employeeHeading="Amount"
                employeeContent="11,1678,900.00"
                timeHeading="Time"
                timeContent="15:31"
              />
            </div>
          </section>
      
      </div>
    </>
  );
};
