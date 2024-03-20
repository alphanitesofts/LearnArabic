import translations from "../../translations";

const letterLevels = [
    { id: 0, level: 1, letters: [{ arabic: `${translations?.dal?.arabic}`, eng: `daal`, progress:0 }, { arabic: `${translations?.thal?.arabic}`, eng: `dhaal`,progress:0 },], locked: false, completed: 1 },
    { id: 1, level: 2, letters: [{ arabic: `${translations?.ra?.arabic}`, eng: `raa`,progress:0 }, { arabic: `${translations?.za?.arabic}`, eng: `zay`,progress:0 }, { arabic: `${translations?.waw?.arabic}`, eng: `wow`,progress:0 }], locked: false, completed: 0 },
    { id: 2, level: 3, letters: [{ arabic: `${translations?.baa?.arabic}`, eng: `baa`,progress:0 }, { arabic: `${translations?.taa?.arabic}`, eng: `taa`,progress:0 }, { arabic: `${translations?.tha?.arabic}`, eng: `thaa`,progress:0 }], locked: false, completed: 0 },
    { id: 3, level: 4, letters: [{ arabic: `${translations?.noon?.arabic}`, eng: `noon`,progress:0 }, { arabic: `${translations?.yaa?.arabic}`, eng: `yaa`,progress:0 }] },
    { id: 4, level: 5, letters: [{ arabic: `${translations?.jeem?.arabic}`, eng: `jeem`,progress:0 }, { arabic: `${translations?.haa?.arabic}`, eng: `7aa`,progress:0 }, { arabic: `${translations?.khaa?.arabic}`, eng: `khaa`,progress:0 }], locked: false, completed: 0 },
    { id: 5, level: 6, letters: [{ arabic: `${translations?.ain?.arabic}`, eng: `3ayn`,progress:0 }, { arabic: `${translations?.ghain?.arabic}`, eng: `ghayn`,progress:0 }], locked: true, completed: 0 },
    { id: 6, level: 7, letters: [{ arabic: `${translations?.seen?.arabic}`, eng: `seen`,progress:0 }, { arabic: `${translations?.sheen?.arabic}`, eng: `sheen`,progress:0 }], locked: true, completed: 0 },
    { id: 7, level: 8, letters: [{ arabic: `${translations?.saad?.arabic}`, eng: `Saad`,progress:0 }, { arabic: `${translations?.daad?.arabic}`, eng: `Daad`,progress:0 }, { arabic: `${translations?.fa?.arabic}`, eng: `faa`,progress:0 }], locked: true, completed: 0 },
    { id: 8, level: 9, letters: [{ arabic: `${translations?.taa?.arabic}`, eng: `Taa`,progress:0 }, { arabic: `${translations?.za?.arabic}`, eng: `Zaa`,progress:0 },], locked: true, completed: 0 },
    { id: 9, level: 10, letters: [{ arabic: `${translations?.qaf?.arabic}`, eng: `qaaf`,progress:0 }, { arabic: `${translations?.kaf?.arabic}`, eng: `kaf`,progress:0 }, { arabic: `${translations?.lam?.arabic}`, eng: `lam`,progress:0 }], locked: true, completed: 0 },
    { id: 10, level: 11, letters: [{ arabic: `${translations?.meem?.arabic}`, eng: `meem`,progress:0 }, { arabic: `${translations?.ha?.arabic}`, eng: `haa`,progress:0 }], locked: true, completed: 0 },
    { id: 11, level: 12, letters: [{ arabic: `${translations?.hamza?.arabic}`, eng: `hamza`,progress:0 }, { arabic: `${translations?.taaMarbuta?.arabic}`, eng: `taa marbuta`,progress:0 }], locked: true, completed: 0 },
    { id: 12, level: 13, letters: [{ arabic: `${translations?.alifMadda?.arabic}`, eng: `madda`,progress:0 }, { arabic: `${translations?.yaa?.arabic}`, eng: `alif maqsura`,progress:0 }], locked: true, completed: 0 },
]

export default letterLevels;