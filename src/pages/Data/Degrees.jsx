import { Table, Anchor, Loader } from "@mantine/core";
import { useEffect } from "react";
import { getDegrees } from "../../services/apiDegrees";
import { useQuery } from "@tanstack/react-query";
// import classes from './TableReviews.module.css';

const data = [
  {
    title: "Foundation",
    author: "Isaac Asimov",
    year: 1951,
    reviews: { positive: 2223, negative: 259 },
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    year: 1818,
    reviews: { positive: 5677, negative: 1265 },
  },
  {
    title: "Solaris",
    author: "Stanislaw Lem",
    year: 1961,
    reviews: { positive: 3487, negative: 1845 },
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    reviews: { positive: 8576, negative: 663 },
  },
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    year: 1969,
    reviews: { positive: 6631, negative: 993 },
  },
  {
    title: "A Scanner Darkly",
    author: "Philip K Dick",
    year: 1977,
    reviews: { positive: 8124, negative: 1847 },
  },
];

function Degrees() {
  const {
    isLoading,
    data: degrees,
    error,
  } = useQuery({
    queryKey: ["degrees"],
    queryFn: getDegrees,
  });

  if (isLoading) return <Loader />;

  const rows = degrees.map((degree) => {
    return (
      <Table.Tr key={degree.code}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {degree.code}
          </Anchor>
        </Table.Td>
        <Table.Td>{degree.name}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Código</Table.Th>
            <Table.Th>Nombre</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}

export default Degrees;
