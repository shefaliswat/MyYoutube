import React, { useState } from "react";
import { mostPopularVideosData } from "../mockData/mostPopular";
import { useDispatch } from "react-redux";
import { addMostPopularVideos } from "../utils/slice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    const videoSearchResultsInfo = mostPopularVideosData.items.filter(
          (item) => item.snippet.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    if(videoSearchResultsInfo?.length) dispatch(addMostPopularVideos(videoSearchResultsInfo))
    else dispatch(addMostPopularVideos([]))
  }

  return (
    <div className="search-bar flex px-5 border-1 border-gray-400 rounded-3xl">
      <input
        className="focus-visible:outline-0 w-[100%]"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e)=> setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          if(e.code == "Enter") handleSearch();
        }}
      />
      <button className="py-1 cursor-pointer" onClick={handleSearch}>
        <img
          className="h-8 w-10"
          alt="Search Icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAgVBMVEX///8AAAD8/PwEBAT5+fnz8/Pp6en29vYYGBju7u7h4eHGxsaLi4uzs7Pk5OQJCQnW1tbMzMwhISGgoKA6OjqBgYETExNVVVW9vb0tLS2mpqZqampFRUVfX1+VlZVycnJQUFB3d3diYmIuLi4+Pj6urq6QkJAcHByjo6NJSUmEhISNjU0OAAAJvUlEQVR4nO2diXbiOgxAHcVJSAKEHQIEKEtb+P8PHO8JEKYFRGuo77yeMjzwsSJZkuVlCHE4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOByvA4D6/bvd+Hm44MD5g7L/OYKk000Z3U4Y/XZfHocwZirMOeh+LueZVyEfN1sJUXb/YjYPlEkVdd9XXj29ZavNRYaXkppBu8OcC+iL/8SPV/k7Y7wLyYtpO57OhYy+z37Ei1LT5cuPt85vdxQDADms2++9C8Z9xjqlz27pIP6QsNk70ul/4B9ad9WXnxbK/+wG3xVay/6WMBf4232/Ha7rTiFG9DfF5h9j0S3/fF6puZXSz49SJObNtNZ72/F6tpzNxvNNpuStunZm6QmRqevTwRTWnlUVKVWeF81JJwwiLhLQKG6n/eXcPxGdfaz12/2/ESDdwemg3g7TUNivUKTRZ9Dpj0en1v7+lMompNU4js+N5SQgMhVT6RjIGMd/02SxPZF7Fvy2BFciUuvPMh3jP71DXSpSVWiw23tHD2ocPlUIF8a7ODLwUTP58luUBK25zOQEmTcPgTyRT2cS9LXUQopZR03D/vMd8RMvGhUfyOR+IrGZfFOmLJV8+16+iyD6OhzJaosM9Drk7cMf6TEGTLyWmnUIAcbMvuk3xyj3cAszSfMzrwjgKfJUrtSuriNwqQ/XmSn7fppXHPobfQaxuQ9qbypST8mVw5M5hmRecQz9p0jQAaKijELZ5NoYJEZ4OJZyi3bSB/UUFRG6TPBK5VtXtxEUZbK6iZ8hO+96xj69yY3jEki04rFANvVG7J9+B7pKyPrc+rYHP4MGAzEHFUyI5e4cWJ6ileQtCL3VOvn0TSUuLIoNmJnb7NYAWGe12Gtys20K5aaqrMpGy7vVyTnr29B48V58X08pOZhJeuPLjP536WQq6vh3xx3mvrfmGQ5t1jaBN5NfvZF7V7dYfl7O4KxWdzJSUyevEd/te9n3DyYqHFD69xBAdRMvpQx7esj0QmtDGIS5jtiDCCfgqGk7k31qrdhkZxKVHcHIMIDEPV2V2ls7E4NCp+KbCCuv6usH6XUxmsOHOV5TEFqgtRmOtNxNpDZxYbqdaqkzrHDDHMRSN7qNLDRynk6sdQ/XWMNQpqjqWXZsHNxURBvZwxZevROCXLf6aaPYZqLNUhXUGGsSvxlem3jQsqoyRp0vTXSpZhBYqG1QQ5sv2n21FHAViV4URHOUiACJBlrsFNPGgcy1lU/wWsUCaKJX8Btt3KZNCMPKBhCB0qNtkes/fa9SSrQM4K5HGnmB3PTE7Nez0KXx9WwpNrZSTLFha+O23OajhmBbO408Rm4ZA10J4ateqMR6JbBn46qvyaaw9xgFeiXxAzlEIABlnMEOryYhsLCOCGT2F8UmD9c2fh6EwlCLvUNuONZj20qXZgJYH7nhUG9GtzCAQVnswy56JbqcNrAvXQFdLcYvB5hkf2Vfcgq66OV7e+SmW496nih0hC36vtdDHoJNPRWxsWQMyuFmnod8vGesxcYOERgArLRPm6LW0kxKbuW6COjA7XtL1MpuR5cQbQzbUHE9Oer+90XFkVvnyplZJ5lYjPa5NWLVlVizq9KjWSe1KJ3O9VaTA+JiUGI249+6t++RcCdmIg2aldOKjVuYmpLjVTo0xajqu3iauI4SDSDxQO0L5sVTlD6C2pPn+XI+a6XgehLmi4wFo4s6GeA2bmH4UpjNxSx9xok25bgZIrT2GEBtXvFFDMPI1Oi4aj+WAipj8TOxgoGwHU+ttDCx1/buMGZObe6h7WgAgGhjjtDZGLQVcteOOuvQi++0cuCbGvURwDG1V9uMeK8yNenV7oEKf+Zbr2yxh6FVHk7l0+N7Osu3cupjMssQdYcEOlFhvBBzvrceFQFKASpn3j1v3gULJ2Aa4Bvp9RGuTfvWXcZcxGblTDPfqb2zeHQzS1yUfd3Ht7lzLvVn9Si3eDUMrFU3ANUnonhPi5umYlAejvXKZ8ieor0pCzfzkWfsvLjhwD33XTvvHN9rtOw978n7nKkolnmr8Nqe8sOx5tD7kdQePx5ssWc7mAPYvpdfu0OWiT08FbmUmz1GW48AAi2UIxLD89rdDe3V8Q0eldHN3s1QN/thQknAT3CZQ49L5tC/NE6QN5OwhGdUKtf3z42dbwmyMlXlB7AHyhHLm3UmvJtfKElezcAv5jGq9muGOK/dxMTGw4/AkrNQb0GQhl78P/aAugUxEhdx+BV11969lXdtvD5Q3pJmdshK5fE7SC7m1fKaoWA6MENY0N/UapvxGdk5wtncuzhR1iylpaUr+UG+5r+SRX4sXyMlYXFJ48xf2HnFFgRDrzI2+YvBoiMGecVE5QtoT9ejE8G2PPKJVPfcrft8bmJlIZWNb9hVLjRVqeZ22OocnwKgYbooGqX9KjlnsRzvk82pzMoAelMr4zefdHb2RxqSYo0GxXCxm6RpOmn1D7N970hkyahPpWsHkhReDTw6HuxcJ2Fyx82svETrS8xdoONqahc0zf871ri3SmwsPggj7I5LC/9abvF48s/guJldfqGFvKVDn02IPgW7QU2HL6t7NEyOsxF+v1T9JcC+lzXtPC7EjTDsf1/wxrLDv1Q9vssfXlw3OxG2UVi4EVXd/Efi3d5os3aY6yrzsEPqbJY9vOmHV+8lBlffX/RjAInSt54R8DTXln/xx9P2BQn4m12xa6BmiI8WlkotM5SwtcxPu2yE+Fj1E/rf7JWEs5qMTSa+dl6aqCIwM/ZufzY4TceyfNyctNXn6r0yVRfIXQqEA5yVxgdgekXbKctSlutiPC5mLG9Jk6jyif91Hki6ObaRkunlZ/braA9X9/73EHOT7FxqNjeJrr2P7seBmydP4o6TrLbkNLh9EebnuFVqQiaNGl373g1FuyeC153mF8pN3tByK78PeqgtrbIxv09sH9+3QylpZXW1B/bWh4VnvHGQd99uz5UtTeDdvgMlOAhvGLzVSs3nJm1zC/irwRIT+jm6kLJtUrl88IJyiy2u2wvVxWxhX+kBByFXODtXtdrqEtuao98Jlxui/iWPvg5eN5IxJnXrJpzFK4uty8nnovdsPP2LBjP05pnIghdO0CWtmn9+yuqrMpHg5WT/tDq3/O1ePRoQKZt/om17t90jwSP07qy2iH0Nin3UzU2svL4CHYDAbHoRy2XD18xOTwB5S4JcMc18bxu+aFZ+Ape7m+vJ575t7y5NXPhyYdAUteS8H9m47v1AaGeSWrwP+aH8KUULqNwz89fkdv+SucPhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD8UT8Az4/V5cZahtaAAAAAElFTkSuQmCC"
        />
      </button>
    </div>
  );
};
