import org.hibernate.Session;
import org.hibernate.Transaction;

import com.socialapp.util.HibernateUtil;

public class MainDriver {

	public static void main(String[] args) {
		
		HibernateUtil hutil = new HibernateUtil();
		Session ses = hutil.getSession();
		//Transaction tx = ses.beginTransaction();
		
		//tx.commit();
		ses.close();

	}

}
