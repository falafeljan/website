export default function Main() {
  return null
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: 'https://kinopio.club/jan-s-portfolio-zgvQLiOhDpLTUnMxPMqEV',
      permanent: false,
    },
  }
}
