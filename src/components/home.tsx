"use client";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { useContext } from "react";
import { CoinPrices, CryptoContext } from "@/providers/CryptoProvider";

export function Home() {
  const coinPrices = useContext(CryptoContext) as CoinPrices;

  const formatCurrency = (value?: Number): String => {
    return value?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') || '-.--';
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
<header className="flex items-center h-16 px-4 border-b dark:border-gray-800 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
          <CurrencyIcon className="w-6 h-6" />
          <span>Coinfinity</span>
        </Link>
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6 md:ml-10">
          <Link className="font-bold" href="#">
            Data
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            News
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search cryptocurrencies..."
                type="search"
              />
            </div>
          </form>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                <Link className="hover:underline" href="#">
                  Bitcoin
                </Link>
              </CardTitle>
              <CurrencyIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${ formatCurrency(coinPrices['bitcoin']?.usd) }</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p>
              <CurvedlineChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                <Link className="hover:underline" href="#">
                  Ethereum
                </Link>
              </CardTitle>
              <CurrencyIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${ formatCurrency(coinPrices['ethereum']?.usd) }</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+180.1% from last month</p>
              <CurvedlineChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                <Link className="hover:underline" href="#">
                  Solana
                </Link>
              </CardTitle>
              <CurrencyIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${ formatCurrency(coinPrices['solana']?.usd) }</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+19% from last month</p>
              <CurvedlineChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                <Link className="hover:underline" href="#">
                  Cardano
                </Link>
              </CardTitle>
              <CurrencyIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${ formatCurrency(coinPrices['cardano']?.usd) }</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+201 since last hour</p>
              <CurvedlineChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Latest Crypto News</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <img
                    alt="News 1"
                    className="rounded-lg object-cover"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <div className="space-y-2">
                    <Link className="text-lg font-medium hover:underline" href="#">
                      Bitcoin hits new all-time high
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Bitcoin&apos;s price surged past $65,000 this week, smashing its previous all-time high.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <img
                    alt="News 2"
                    className="rounded-lg object-cover"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <div className="space-y-2">
                    <Link className="text-lg font-medium hover:underline" href="#">
                      Ethereum 2.0 launches successfully
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      The long-awaited upgrade to the Ethereum network promises to increase transaction speed and
                      decrease fees.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}



const CurrencyIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="8" />
    <line x1="3" x2="6" y1="3" y2="6" />
    <line x1="21" x2="18" y1="3" y2="6" />
    <line x1="3" x2="6" y1="21" y2="18" />
    <line x1="21" x2="18" y1="21" y2="18" />
  </svg>
);


const SearchIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);


const CurvedlineChart = ({ ...props }) => (
  <div {...props}>
    <ResponsiveLine
      data={[
        {
          id: "Desktop",
          data: [
            { x: "Jan", y: 43 },
            { x: "Feb", y: 137 },
            { x: "Mar", y: 61 },
            { x: "Apr", y: 145 },
            { x: "May", y: 26 },
            { x: "Jun", y: 154 },
          ],
        },
        {
          id: "Mobile",
          data: [
            { x: "Jan", y: 60 },
            { x: "Feb", y: 48 },
            { x: "Mar", y: 177 },
            { x: "Apr", y: 78 },
            { x: "May", y: 96 },
            { x: "Jun", y: 204 },
          ],
        },
      ]}
      margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
      xScale={{
        type: "point",
      }}
      yScale={{
        type: "linear",
        min: 0,
        max: "auto",
      }}
      curve="monotoneX"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 16,
      }}
      axisLeft={{
        tickSize: 0,
        tickValues: 5,
        tickPadding: 16,
      }}
      colors={["#2563eb", "#e11d48"]}
      pointSize={6}
      useMesh={true}
      gridYValues={6}
      theme={{
        tooltip: {
          chip: {
            borderRadius: "9999px",
          },
          container: {
            fontSize: "12px",
            textTransform: "capitalize",
            borderRadius: "6px",
          },
        },
        grid: {
          line: {
            stroke: "#f3f4f6",
          },
        },
      }}
      role="application"
    />
  </div>
);