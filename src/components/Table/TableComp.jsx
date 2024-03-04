import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import Hams from "/images/Hams.svg";
import Margin from "/images/margin.png";
import Solana from "/images/solana.png";
import { useBet } from "../../hooks/useBet";

const TABLE_HEAD = [
  "Game",
  "User",
  "Time",
  "Bet Amount",
  "Multiplier",
  "Payout",
];

const TABLE_ROWS = [
  {
    // img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    img: Hams,
    name: "Hamsters",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    // img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    img: Hams,
    name: "Hamsters",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    // img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    img: Hams,
    name: "Hamsters",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    // img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    img: Hams,
    name: "Hamsters",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    // img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    img: Hams,
    name: "Hamsters",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    // img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    img: Hams,
    name: "Hamsters",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    // img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    img: Hams,
    name: "Hamsters",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    // img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    img: Hams,
    name: "Hamsters",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    // img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    img: Hams,
    name: "Hamsters",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

const games = [
  { id: "marbles", name: "Marbles", thumbnail: "/images/Hams.svg" },
  { id: "hemsters", name: "Hemsters", thumbnail: "/images/Hams.svg" },
];

export default function TransactionsTable() {
  const { bets } = useBet();

  console.log("bets");
  console.log(bets);

  return (
    <Card className="h-full w-full bg-black ">
      {/* <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Recent Transactions
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </CardHeader> */}
      <CardBody className=" px-0">
        <table className="w-full min-w-max table-auto ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="py-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-[#FFFFFF99] text-left leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  img,
                  name,
                  amount,
                  date,
                  status,
                  account,
                  accountNumber,
                  expiry,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-1" : "p-1 ";

                return (
                  <tr key={name}>
                    {/* Transaction */}
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <img
                          src={img}
                          alt={name}
                          size="md"
                          className="object-contain"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-Inter text-white font-[400]"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>

                    {/* New */}
                    <td className={classes}>
                      <div className="flex items-center">
                        <div className="w-auto h-auto rounded-md ">
                          <Avatar
                            // src={
                            //   account === "visa"
                            //     ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                            //     : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                            // }
                            src={Margin}
                            size="sm"
                            alt={account}
                            variant="square"
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal capitalize text-[#68758C]"
                          >
                            {/* {account.split("-").join(" ")} {accountNumber} */}
                            3dQp..HU7f
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {/* {expiry} */}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    {/* Time */}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-[14px] font-chakra text-white"
                      >
                        {/* {amount} */}
                        8:38am
                      </Typography>
                    </td>
                    {/* Bet */}
                    <td className={classes}>
                      <div className="flex justify-center items-center ">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-[14px] font-chakra text-[#FFFFFF]"
                        >
                          {/* {amount} */}1
                        </Typography>
                        <div className="">
                          <img
                            src={Solana}
                            alt=""
                            className="w-[21px] h-[11px]"
                          />
                        </div>
                      </div>
                    </td>

                    {/* Multiplier */}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-[#FFFFFF] text-[14px] font-chakra "
                      >
                        {/* {date} */}
                        x5000.00
                      </Typography>
                    </td>

                    {/* Payout */}
                    <td className={classes}>
                      <div className="flex justify-start items-center ">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-[#FFFFFF] text-[14px] font-chakra"
                        >
                          {/* {amount} */}
                          5000
                        </Typography>
                        <div className="">
                          <img
                            src={Solana}
                            alt=""
                            className="w-[21px] h-[11px]"
                          />
                        </div>
                      </div>
                    </td>

                    {/* <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "paid"
                              ? "green"
                              : status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td> */}

                    {/* Account */}
                    {/* <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                          <Avatar
                            src={
                              account === "visa"
                                ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                            }
                            size="sm"
                            alt={account}
                            variant="square"
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal capitalize"
                          >
                            {account.split("-").join(" ")} {accountNumber}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {expiry}
                          </Typography>
                        </div>
                      </div>
                    </td> */}

                    {/* <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td> */}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
