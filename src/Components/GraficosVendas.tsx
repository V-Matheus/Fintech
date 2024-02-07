import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { IVenda } from '../Context/DataContext'

const dadosGrafico = [
  {
    data: '2023-05-03',
    pago: 3000,
    processando: 3000,
    falha: 2000,
  },
  {
    data: '2023-05-04',
    pago: 4000,
    processando: 4200,
    falha: 1000,
  },
  {
    data: '2023-05-05',
    pago: 8000,
    processando: 7600,
    falha: 3500,
  }
]

const GraficosVendas = ({ data }: { data: IVenda[] }) => {

  return (
    <ResponsiveContainer width='99%' height={400}>
      <LineChart data={dadosGrafico}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line type="monotone" dataKey="processando" stroke="#FBCB21" strokeWidth={3} />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default GraficosVendas