import Draft from "./Draft";
import Post from "./Post";
import Tab from "@/components/CustomComponents/Tab";
import styles from "./Timeline.module.scss";

export default function Timeline() {
	return (
		<section className={styles.timeline}>
			<section className={styles.timeline_top}>
				<div>Main Timeline</div>
			</section>
			<Draft />
			<div className={styles.timeline_tabgroup}>
				<Tab content="posts" fontSize={12} p={4} borderRadius={0} />
				<Tab content="replies" fontSize={12} p={4} borderRadius={0} />
				<Tab content="likes" fontSize={12} p={4} borderRadius={0} />
			</div>
			<section>
				{posts.map((data, index) => (
					<Post {...data} key={index} />
				))}
			</section>
		</section>
	);
}

const url: string =
	"https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const posts = [
	{
		avatar: url,
		username: "Yoshino",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorem illo numquam culpa aperiam molestiae. Unde beatae nam cum commodi, doloremque, similique ipsa tempore ratione, atque cupiditate eveniet. Soluta, non?",
		displayName: "Yoshino220",
		profile_url: "",
	},
	{
		avatar: url,
		username: "Yoshino",
		image: url,
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorem illo numquam culpa aperiam molestiae. Unde beatae nam cum commodi, doloremque, similique ipsa tempore ratione, atque cupiditate eveniet. Soluta, non?",
		displayName: "Yoshino220",
	},
	{
		avatar: url,
		username: "Yoshino",
		image: url,
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorem illo numquam culpa aperiam molestiae. Unde beatae nam cum commodi, doloremque, similique ipsa tempore ratione, atque cupiditate eveniet. Soluta, non?",
		displayName: "Yoshino220",
	},
	{
		avatar: url,
		username: "Yoshino",
		image: url,
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorem illo numquam culpa aperiam molestiae. Unde beatae nam cum commodi, doloremque, similique ipsa tempore ratione, atque cupiditate eveniet. Soluta, non?",
		displayName: "Yoshino220",
	},
	{
		avatar: url,
		username: "Yoshino",
		image: url,
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorem illo numquam culpa aperiam molestiae. Unde beatae nam cum commodi, doloremque, similique ipsa tempore ratione, atque cupiditate eveniet. Soluta, non?",
		displayName: "Yoshino220",
	},
];
