import {
	Image,
	Table,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { FC } from "react";
import { CartQuery } from "@/graphql/cart/__generated__/CartQuery";
import styles from "./FastCartTable.module.scss";
import RemoveButton from "./remove-button/RemoveButton";
import RemoveCouponButton from "./remove-coupon-button/RemoveCouponButton";

type Props = {
	cart: CartQuery["cart"];
};

const FastCartTable: FC<Props> = ({ cart }) => {
	const cartItems = cart?.contents?.edges.map((item) => item.node);
	const couponItems = cart?.appliedCoupons;

	return (
		<div>
			<h3 className={styles.title}>Ваш заказ</h3>
			<TableContainer>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th>Продукт</Th>
							<Th></Th>
							<Th>Всего</Th>
							<Th textAlign="right"></Th>
						</Tr>
					</Thead>
					<Tbody>
						{cartItems?.map((item) => {
							const product = item.product?.node;
							return (
								<Tr key={item.key}>
									<Td>
										<Image
											className={styles.image}
											src={
												product?.featuredImage?.node.sourceUrl ||
												"/img/default.jpg"
											}
											alt={product?.title || ""}
											width={70}
											height={70}
										/>
									</Td>
									<Td>
										<div className={styles.productTitle}>{product?.title}</div>
										<div className={styles.quantity}>
											кол-во: <span>{item.quantity}</span>
										</div>
									</Td>
									<Td>
										<div>
											{item.product?.node.__typename == "SimpleProduct" &&
												item.product.node.price}{" "}
											₽
										</div>
									</Td>
									<Td>
										<RemoveButton cartKey={item.key} />
									</Td>
								</Tr>
							);
						})}
					</Tbody>
					<Tfoot>
						{couponItems &&
							couponItems.map((item) => (
								<Tr key={item?.code}>
									<Th>
										<div>Купон: {item?.code}</div>
									</Th>
									<Th></Th>
									<Th></Th>
									<Th>
										<div className={styles.coupon}>
											<div className={styles.couponDiscount}>
												-{item?.discountAmount} ₽
											</div>
											<RemoveCouponButton couponCode={item?.code} />
										</div>
									</Th>
								</Tr>
							))}
						<Tr>
							<Th></Th>
							<Th></Th>
							<Th></Th>
							<Th>
								<div className={styles.total}>Всего: {cart?.total} ₽</div>
							</Th>
						</Tr>
					</Tfoot>
				</Table>
			</TableContainer>
		</div>
	);
};

export default FastCartTable;
