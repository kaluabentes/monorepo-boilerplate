import { range } from "lodash"
import { ReactNode } from "react"

import Card from "../Card/Card"
import Skeleton from "../Skeleton/Skeleton"

import styles from "./Table.module.css"

interface CommonProps {
  children: ReactNode
  isLoading?: boolean
  padding?: boolean
}

export const TableSkeleton = () => (
  <Table>
    <thead>
      <tr>
        <th>
          <Skeleton />
        </th>
        <th>
          <Skeleton />
        </th>
        <th>
          <Skeleton />
        </th>
      </tr>
    </thead>
    <tbody>
      {range(10).map((number: number) => (
        <tr key={number}>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export const Table = ({
  children,
  isLoading = false,
  padding = false,
}: CommonProps) => {
  if (isLoading) {
    return <TableSkeleton />
  }

  return (
    <Card className={styles.wrapper} padding={padding ? "small" : undefined}>
      <table className={styles.table}>{children}</table>
    </Card>
  )
}
