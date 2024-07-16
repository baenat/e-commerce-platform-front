

<svelte:head>
  <title>E-commerce svelte</title>

  <meta name="description" content="E-commerce with SvelteKit" />
</svelte:head>

<Navbar></Navbar>
<slot></slot>
<Footer></Footer>
<script>import "../app.css";
import Navbar from "$lib/components/Navbar.svelte";
import Footer from "$lib/components/Footer.svelte";</script>